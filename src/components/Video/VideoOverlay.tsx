import { VideoComments } from './VideoComments'
import { VideoMuteButton } from './VideoMuteButton'
import { VideoOptions } from './VideoOptions'
import { VideoProgress } from './VideoProgress'
import { VideoContext } from '@/contexts/VideoContext'
import type { Video } from '@/types/api'
import type { VideoValues } from '@/types/contexts'
import { formatNumber } from '@/utils'
import { Heart, Play, Volume2, VolumeOff } from 'lucide-react'
import { useContext, type FC, type RefObject } from 'react'

interface VideoOverlayProps extends Video {
  videoRef: RefObject<HTMLVideoElement | null>
}

export const VideoOverlay: FC<VideoOverlayProps> = ({
  likesCount,
  commentsCount,
  videoRef
}) => {
  const { isPaused } = useContext(VideoContext) as VideoValues

  const likesCountString = formatNumber(likesCount)
  const commentsCountString = formatNumber(commentsCount)

  return (
    <>
      <div className='absolute right-0 bottom-1/6 flex flex-col items-center md:right-auto md:left-full'>
        <button className='cursor-pointer p-2'>
          <div className='h-12 w-12 rounded-full bg-gray-600' />
        </button>
        <button className='flex cursor-pointer flex-col items-center gap-1 p-4 text-white/70'>
          <Heart size={28} />
          <span className='text-sm'>{likesCountString}</span>
        </button>
        <VideoComments count={commentsCountString} />
        <VideoOptions />
      </div>
      <VideoProgress />
      <VideoMuteButton videoRef={videoRef} />
      {isPaused && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60'>
          <Play size={70} className='fill-white stroke-white' />
        </div>
      )}
    </>
  )
}
