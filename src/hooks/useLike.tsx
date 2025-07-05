import { likeVideo } from '@/services/api'
import type { InfiniteVideos, Video } from '@/types/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

type VideoData = { pages: InfiniteVideos[] }

export const useLike = (videoId: string) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: likeVideo,
    onMutate: async () => {
      const previousVideoValue = queryClient.getQueryData(['video', videoId])
      const previousFeedValue = queryClient.getQueryData(['video', 'feed'])

      if (previousVideoValue) {
        queryClient.setQueryData(['video', videoId], (video: Video) =>
          incrementVideoLikes(video)
        )
      }

      if (previousFeedValue) {
        queryClient.setQueryData(['video', 'feed'], (videoData: VideoData) =>
          updateFeedWithIncrementedLikes(videoData)
        )
      }

      return { previousVideoValue, previousFeedValue }
    },
    onError: (error, _, context) => {
      toast.error(error.message ?? 'Something went wrong')
      queryClient.setQueryData(['video', videoId], context?.previousVideoValue)
      queryClient.setQueryData(['video', 'feed'], context?.previousFeedValue)
    }
  })

  function incrementVideoLikes(video: Video): Video {
    return { ...video, likesCount: video.likesCount + 1 }
  }

  function findVideoAndIncrementLikes(videos: Video[]) {
    return videos.map((video) =>
      video._id === videoId ? incrementVideoLikes(video) : video
    )
  }

  function updateFeedWithIncrementedLikes(videoData: VideoData) {
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

  return () => mutate(videoId)
}
