import { toggleVideoLike } from '@/services/api'
import type { InfiniteVideos, Video } from '@/types/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
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

  function updateVideoLikes(video: Video): Video {
    const likesCount = video.isLiked
      ? video.likesCount - 1
      : video.likesCount + 1
    return { ...video, isLiked: !video.isLiked, likesCount }
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
