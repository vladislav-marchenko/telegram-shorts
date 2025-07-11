import { VideoComments } from './VideoComments/VideoComments'
import { VideoLikeButton } from './VideoLikes/VideoLikeButton'
import { VideoOptions } from './VideoOptions'
import { VideoProgress } from './VideoProgress/VideoProgress'
import { VideoVolume } from './VideoVolume/VideoVolume'
import { VideoContext } from '@/contexts/VideoContext'
import type { Video } from '@/types/api'
import type { VideoValues } from '@/types/contexts'
import { Play } from 'lucide-react'
import { useContext, type FC } from 'react'

export const VideoOverlay: FC<Video> = ({
  _id,
  likesCount,
  commentsCount,
  isLiked
}) => {
  const { isManuallyPaused } = useContext(VideoContext) as VideoValues

  return (
    <>
      <div className='absolute right-0 bottom-0 flex h-full flex-col items-center justify-end pb-24'>
        <button className='video-button p-2'>
          <div className='h-12 w-12 rounded-full bg-gray-600' />
        </button>
        <VideoLikeButton isLiked={isLiked} count={likesCount} videoId={_id} />
        <VideoComments count={commentsCount} videoId={_id} />
        <VideoOptions />
        <VideoVolume />
      </div>
      <VideoProgress />
      {isManuallyPaused && (
        <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70'>
          <Play
            size={70}
            className='fill-white stroke-white drop-shadow-md drop-shadow-black/50'
          />
        </div>
      )}
    </>
  )
}
