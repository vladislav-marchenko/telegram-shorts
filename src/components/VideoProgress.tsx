import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { progress } = useContext(VideoContext) as VideoValues

  return (
    <div
      className='absolute bottom-0 h-0.5 w-full bg-neutral-300/50 transition-[width] duration-100 ease-linear'
      style={{ width: `${progress}%` }}
    />
  )
}
