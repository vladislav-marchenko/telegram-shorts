import { getLikeStatus } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import type { FC } from 'react'

export const VideoLikesIcon: FC<{ videoId: string }> = ({ videoId }) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['like', 'status', videoId],
    queryFn: () => getLikeStatus(videoId)
  })

  if (isSuccess && data.isLiked) {
    return <Heart size={28} className='fill-red-500 stroke-red-500' />
  }

  return <Heart size={28} />
}
