import { VideoSkeleton } from '@/components/Video/VideoSkeleton'
import { useIsPaused } from '@/hooks/useIsPaused'
import { useVideoPlayback } from '@/hooks/useVideoPlayback'
import { useVideoRatio } from '@/hooks/useVideoRatio'
import { type VideoValues } from '@/types/contexts'
import {
  createContext,
  useEffect,
  useRef,
  useState,
  type FC,
  type ReactNode
} from 'react'

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
  const video = videoRef.current
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)

  const toggle = () => {
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
    setIsManuallyPaused
  }

  if (!isVisible) return <VideoSkeleton />
  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
