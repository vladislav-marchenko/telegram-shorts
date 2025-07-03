import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { progress } = useContext(VideoContext) as VideoValues

  return (
    <div className='absolute bottom-16 w-full px-4 md:bottom-20'>
      <div className='relative h-1 w-full overflow-hidden rounded-full bg-neutral-600/50'>
        <div
          className='absolute top-0 left-0 h-full w-full bg-neutral-200/70'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
