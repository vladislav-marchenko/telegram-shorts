import { VideoSkeleton } from '@/components/Video/VideoSkeleton'
import { type VideoValues } from '@/types/contexts'
import { createContext, useRef, useState, type FC, type ReactNode } from 'react'

export const VideoContext = createContext<VideoValues | null>(null)

interface VideoContextProdiverProps {
  children: ReactNode
  isVisible?: boolean
  isCurrent: boolean
}

export const VideoContextProvider: FC<VideoContextProdiverProps> = ({
  children,
  isVisible = true,
  isCurrent
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)
  const [isShortcutsDisabled, setIsShortcutsDisabled] = useState(false)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsManuallyPaused(false)
    } else {
      video.pause()
      setIsManuallyPaused(true)
    }
  }

  const value = {
    ref: videoRef,
    isCurrent,
    toggle,
    isManuallyPaused,
    setIsManuallyPaused,
    isShortcutsDisabled,
    setIsShortcutsDisabled
  }

  if (!isVisible) return <VideoSkeleton />
  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
