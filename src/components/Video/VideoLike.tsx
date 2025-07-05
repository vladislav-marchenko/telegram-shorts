import { useLike } from '@/hooks/useLike'
import { formatNumber } from '@/utils'
import { Heart } from 'lucide-react'
import { type FC } from 'react'

interface VideoLikeProps {
  count: number
  videoId: string
}

export const VideoLike: FC<VideoLikeProps> = ({ count, videoId }) => {
  const like = useLike(videoId)

  return (
    <button
      onClick={like}
      className='video-button flex flex-col items-center gap-1'
    >
      <Heart size={28} />
      <span>{formatNumber(count)}</span>
    </button>
  )
}
