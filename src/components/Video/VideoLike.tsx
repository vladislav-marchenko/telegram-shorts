import { likeVideo } from '@/services/api'
import { formatNumber } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { type FC } from 'react'
import { toast } from 'sonner'

interface VideoLikeProps {
  count: number
  videoId: string
}

export const VideoLike: FC<VideoLikeProps> = ({ count, videoId }) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: likeVideo,
    onMutate: async () => {
      const previousValue = queryClient.getQueryData(['video', videoId])
      queryClient.setQueryData(['video', videoId], (old: any) => ({
        ...old,
        likesCount: old.likesCount + 1
      }))

      return { previousValue }
    },
    onError: (error, _, context) => {
      toast.error(error.message ?? 'Something went wrong')
      queryClient.setQueryData(['video', videoId], context?.previousValue)
    }
  })

  return (
    <button
      onClick={() => mutate(videoId)}
      className='video-button flex flex-col items-center gap-1'
    >
      <Heart size={28} />
      <span>{formatNumber(count)}</span>
    </button>
  )
}
