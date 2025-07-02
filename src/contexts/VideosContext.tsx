import { useProgress } from '@/hooks/useProgress'
import type { VideosValues } from '@/types/contexts'
import { createContext, useRef, type FC, type ReactNode } from 'react'

export const VideosContext = createContext<VideosValues | null>(null)

export const VideosContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const currentVideoRef = useRef<HTMLVideoElement | null>(null)
  const currentVideoProgress = useProgress(currentVideoRef)

  const setCurrentVideo = (video: HTMLVideoElement) => {
    currentVideoRef.current = video
  }

  return (
    <VideosContext.Provider
      value={{ currentVideoRef, setCurrentVideo, currentVideoProgress }}
    >
      {children}
    </VideosContext.Provider>
  )
}
