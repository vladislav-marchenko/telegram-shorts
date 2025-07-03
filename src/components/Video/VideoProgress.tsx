import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { progress } = useContext(VideoContext) as VideoValues

  return (
    <div className='absolute w-full p-6 opacity-0 transition-opacity hover:opacity-100 md:bottom-14'>
      <div className='group relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-neutral-600/50 transition-all hover:h-2 hover:bg-neutral-600'>
        <div
          className='absolute top-0 left-0 h-full w-full bg-neutral-200/70 transition-colors group-hover:bg-neutral-200'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
