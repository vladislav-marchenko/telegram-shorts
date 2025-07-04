import { useIsPaused } from '@/hooks/useIsPaused'
import { useProgress } from '@/hooks/useProgress'
import { useVideoRatio } from '@/hooks/useVideoRatio'
import { useVolume } from '@/hooks/useVolume'
import { type VideoValues } from '@/types/contexts'
import { createContext, useRef, type FC, type ReactNode } from 'react'

export const VideoContext = createContext<VideoValues | null>(null)

export const VideoContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const video = videoRef.current

  const isPaused = useIsPaused(videoRef)
  const ratio = useVideoRatio(videoRef)
  const [progress, setProgress] = useProgress(videoRef)
  const { volume, changeVolume, toggleMute } = useVolume(videoRef)

  const toggle = () => {
    if (!video) return
    video.paused ? video.play() : video.pause()
  }

  const changeProgress = (value: number) => {
    if (!video) return

    video.currentTime = (video.duration / 100) * value
    setProgress(value)
  }

  const value = {
    ref: videoRef,
    ratio,
    toggle,
    isPaused,
    progress,
    changeProgress,
    volume,
    changeVolume,
    toggleMute
  }

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
