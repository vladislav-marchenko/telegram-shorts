import { VideoSkeleton } from '@/components/Video/VideoSkeleton'
import { useIsPaused } from '@/hooks/useIsPaused'
import { useVideoRatio } from '@/hooks/useVideoRatio'
import { type VideoValues } from '@/types/contexts'
import { createContext, useRef, type FC, type ReactNode } from 'react'

export const VideoContext = createContext<VideoValues | null>(null)

interface VideoContextProdiverProps {
  children: ReactNode
  isVisible?: boolean
}

export const VideoContextProvider: FC<VideoContextProdiverProps> = ({
  children,
  isVisible = true
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const video = videoRef.current

  const isPaused = useIsPaused(videoRef)
  const ratio = useVideoRatio(videoRef)

  const toggle = () => {
    if (!video) return
    video.paused ? video.play() : video.pause()
  }

  if (!isVisible) return <VideoSkeleton />

  const value = {
    ref: videoRef,
    ratio,
    toggle,
    isPaused
  }

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
