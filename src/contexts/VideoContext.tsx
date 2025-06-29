import { useIsPaused } from '@/hooks/useIsPaused'
import { useProgress } from '@/hooks/useProgress'
import { type VideoValues } from '@/types/contexts'
import { createContext, useRef, type FC, type ReactNode } from 'react'

export const VideoContext = createContext<VideoValues | null>(null)

export const VideoContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isPaused = useIsPaused(videoRef)
  const progress = useProgress(videoRef)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return

    video.paused ? video.play() : video.pause()
  }

  const value = {
    ref: videoRef,
    toggle,
    isPaused,
    progress
  }

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
