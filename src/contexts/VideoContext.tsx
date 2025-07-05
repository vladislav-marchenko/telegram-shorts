import { VideoSkeleton } from '@/components/Video/VideoSkeleton'
import { useIsPaused } from '@/hooks/useIsPaused'
import { useProgress } from '@/hooks/useProgress'
import { useVideoRatio } from '@/hooks/useVideoRatio'
import { useVolume } from '@/hooks/useVolume'
import { type VideoValues } from '@/types/contexts'
import { createContext, useRef, useState, type FC, type ReactNode } from 'react'

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

  const [isPaused, setIsPaused] = useState(false)
  const ratio = useVideoRatio(videoRef)
  const { volume, changeVolume, toggleMute } = useVolume(videoRef)

  const toggle = () => {
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPaused(false)
    } else {
      video.pause()
      setIsPaused(true)
    }
  }

  if (!isVisible) return <VideoSkeleton />

  const value = {
    ref: videoRef,
    ratio,
    toggle,
    isPaused,
    volume,
    changeVolume,
    toggleMute
  }

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
