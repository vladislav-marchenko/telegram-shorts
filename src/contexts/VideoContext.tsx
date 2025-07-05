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
  const ratio = useVideoRatio(videoRef)

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

  useVideoPlayback(videoRef, { isCurrent, setIsManuallyPaused })

  const value = {
    ref: videoRef,
    ratio,
    toggle,
    isManuallyPaused
  }

  if (!isVisible) return <VideoSkeleton />
  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
