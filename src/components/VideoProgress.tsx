import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { progress } = useContext(VideoContext) as VideoValues

  return (
    <div className='absolute bottom-0 h-0.5 w-full bg-neutral-600/50'>
      <div
        className='absolute top-0 left-0 h-full w-full bg-neutral-200/50'
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
