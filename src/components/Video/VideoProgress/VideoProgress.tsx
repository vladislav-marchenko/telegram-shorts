import { VideoProgressSlider } from './VideoProgressSlider'
import { VideoContext } from '@/contexts/VideoContext'
import { cn } from '@/lib/utils'
import type { VideoValues } from '@/types/contexts'
import { useContext } from 'react'

export const VideoProgress = () => {
  const { isManuallyPaused } = useContext(VideoContext) as VideoValues

  return (
    <div
      className={cn(
        'absolute bottom-8 w-full px-3 py-2 drop-shadow-md drop-shadow-black/30 transition-opacity duration-300 md:bottom-14 md:px-6',
        !isManuallyPaused && 'hover:opacity-100 any-pointer-fine:opacity-0'
      )}
    >
      <VideoProgressSlider />
    </div>
  )
}
