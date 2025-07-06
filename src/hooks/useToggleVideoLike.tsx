import { getLikeStatus, toggleVideoLike } from '@/services/api'
import type { InfiniteVideos, Video } from '@/types/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

type VideoData = { pages: InfiniteVideos[] }

export const useToggleVideoLike = (videoId: string) => {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: toggleVideoLike,
    onMutate: async () => {
      const previousVideoValue = queryClient.getQueryData(['video', videoId])
      const previousFeedValue = queryClient.getQueryData(['video', 'feed'])

      if (previousVideoValue) {
        queryClient.setQueryData(['video', videoId], (video: Video) =>
          updateVideoLikes(video)
        )
      }

      if (previousFeedValue) {
        queryClient.setQueryData(['video', 'feed'], (videoData: VideoData) =>
          updateFeedWithUpdatedLikes(videoData)
        )
      }

      return { previousVideoValue, previousFeedValue }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likes', videoId] })
    },
    onError: (error, _, context) => {
      toast.error(error.message ?? 'Something went wrong')
      queryClient.setQueryData(['video', videoId], context?.previousVideoValue)
      queryClient.setQueryData(['video', 'feed'], context?.previousFeedValue)
    }
  })

  const { data, isSuccess } = useQuery({
    queryKey: ['like', 'status', videoId],
    queryFn: () => getLikeStatus(videoId)
  })

  function updateVideoLikes(video: Video): Video {
    if (!isSuccess) return video

    queryClient.setQueryData(['like', 'status', videoId], {
      isLiked: !data.isLiked
    })

    if (data.isLiked) {
      return { ...video, likesCount: video.likesCount - 1 }
    }
    return { ...video, likesCount: video.likesCount + 1 }
  }

  function findVideoAndIncrementLikes(videos: Video[]) {
    return videos.map((video) =>
      video._id === videoId ? updateVideoLikes(video) : video
    )
  }

  function updateFeedWithUpdatedLikes(videoData: VideoData) {
    return {
      ...videoData,
      pages: mapPagesWithUpdatedVideos(videoData.pages)
    }
  }

  function mapPagesWithUpdatedVideos(pages: InfiniteVideos[]) {
    return pages.map((page) => ({
      ...page,
      videos: findVideoAndIncrementLikes(page.videos)
    }))
  }

  return { toggleLike: () => mutate(videoId), isPending }
}
