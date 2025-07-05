import { VideoLikes } from './VideoLikes'
import { useLikeVideo } from '@/hooks/useLikeVideo'
import { formatNumber } from '@/utils'
import { Heart } from 'lucide-react'
import { type FC } from 'react'

interface VideoLikeProps {
  count: number
  videoId: string
}

export const VideoLikeButton: FC<VideoLikeProps> = ({ count, videoId }) => {
  const like = useLikeVideo(videoId)

  return (
    <>
      <button onClick={like} className='video-button pb-0'>
        <Heart size={28} />
      </button>
      <VideoLikes videoId={videoId}>{formatNumber(count)}</VideoLikes>
    </>
  )
}
