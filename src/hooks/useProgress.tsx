import { useEffect, useRef, useState, type RefObject } from 'react'

export const useProgress = (videoRef: RefObject<HTMLVideoElement | null>) => {
  const [progress, setProgress] = useState(0)
  const requestId = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100)
      requestId.current = requestAnimationFrame(updateProgress)
    }

    const handlePlay = () => {
      requestId.current = requestAnimationFrame(updateProgress)
    }

    const handlePause = () => {
      if (requestId.current) cancelAnimationFrame(requestId.current)
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      if (requestId.current) cancelAnimationFrame(requestId.current)
    }
  }, [videoRef])

  return progress
}
