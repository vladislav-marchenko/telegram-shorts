import { VideoComments } from './VideoComments'
import { VideoOptions } from './VideoOptions'
import { VideoProgress } from './VideoProgress'
import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { Heart, Play } from 'lucide-react'
import { useContext } from 'react'

export const VideoOverlay = () => {
  const { isPaused } = useContext(VideoContext) as VideoValues

  return (
    <>
      <div className='absolute right-0 bottom-1/6 flex flex-col items-center gap-2'>
        <button className='cursor-pointer p-2'>
          <div className='h-12 w-12 rounded-full bg-gray-600' />
        </button>
        <button className='flex cursor-pointer flex-col items-center gap-1 p-2 text-white/70'>
          <Heart size={28} />
          <span className='text-sm'>143K</span>
        </button>
        <VideoComments />
        <VideoOptions />
      </div>
      <VideoProgress />
      {isPaused && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Play size={50} className='text-white/60' />
        </div>
      )}
    </>
  )
}
