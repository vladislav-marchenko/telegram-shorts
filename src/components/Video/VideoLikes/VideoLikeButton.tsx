import { VideoLikes } from './VideoLikes'
import { VideoLikesIcon } from './VideoLikesIcon'
import { useToggleVideoLike } from '@/hooks/useToggleVideoLike'
import { formatNumber } from '@/utils'
import { type FC } from 'react'

interface VideoLikeProps {
  count: number
  videoId: string
}

export const VideoLikeButton: FC<VideoLikeProps> = ({ count, videoId }) => {
  const { toggleLike, isPending } = useToggleVideoLike(videoId)

  return (
    <>
      <button
        onClick={toggleLike}
        disabled={isPending}
        className='video-button pb-0'
      >
        <VideoLikesIcon videoId={videoId} />
      </button>
      <VideoLikes videoId={videoId}>{formatNumber(count)}</VideoLikes>
    </>
  )
}
