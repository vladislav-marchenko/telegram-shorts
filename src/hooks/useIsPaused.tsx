import { useEffect, useState, type RefObject } from 'react'

export const useIsPaused = (videoRef: RefObject<HTMLVideoElement | null>) => {
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPaused(false)
    const handlePause = () => setIsPaused(true)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [videoRef])

  return isPaused
}
