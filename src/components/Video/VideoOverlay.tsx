import { VideoComments } from './VideoComments'
import { VideoOptions } from './VideoOptions'
import { VideoProgress } from './VideoProgress'
import { VideoVolume } from './VideoVolume'
import { VideoContext } from '@/contexts/VideoContext'
import type { Video } from '@/types/api'
import type { VideoValues } from '@/types/contexts'
import { formatNumber } from '@/utils'
import { Heart, Play } from 'lucide-react'
import { useContext, type FC } from 'react'

export const VideoOverlay: FC<Video> = ({ likesCount, commentsCount }) => {
  const { isPaused } = useContext(VideoContext) as VideoValues

  const likesCountString = formatNumber(likesCount)
  const commentsCountString = formatNumber(commentsCount)

  return (
    <>
      <div className='absolute right-0 bottom-0 flex h-full flex-col items-center justify-end pb-24'>
        <button className='video-button p-2'>
          <div className='h-12 w-12 rounded-full bg-gray-600' />
        </button>
        <button className='video-button flex flex-col items-center gap-1'>
          <Heart size={28} />
          <span>{likesCountString}</span>
        </button>
        <VideoComments count={commentsCountString} />
        <VideoOptions />
        <VideoVolume />
      </div>
      <VideoProgress />
      {isPaused && (
        <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60'>
          <Play size={70} className='fill-white stroke-white' />
        </div>
      )}
    </>
  )
}
