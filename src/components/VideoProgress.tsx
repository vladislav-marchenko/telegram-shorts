import { useProgress } from '@/hooks/useProgress'
import { type FC, type RefObject } from 'react'

export const VideoProgress: FC<{
  videoRef: RefObject<HTMLVideoElement | null>
}> = ({ videoRef }) => {
  const progress = useProgress(videoRef)

  return (
    <div
      className='absolute bottom-0 h-0.5 w-full bg-neutral-300/50 transition-[width] duration-100 ease-linear'
      style={{ width: `${progress}%` }}
    />
  )
}
