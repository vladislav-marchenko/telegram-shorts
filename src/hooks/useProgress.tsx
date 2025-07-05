import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

type ValueFn = (value: number) => number

export const useProgress = (videoRef: RefObject<HTMLVideoElement | null>) => {
  const [progress, setProgress] = useState(0)
  const requestId = useRef<number | null>(null)

  const changeProgress = useCallback(
    (value: number | ValueFn) => {
      const video = videoRef.current
      if (!video) return

      let newValue = typeof value === 'number' ? value : value(progress)
      if (newValue < 0) newValue = 0
      if (newValue > 100) newValue = 100

      video.currentTime = (video.duration / 100) * newValue
      setProgress(value)
    },
    [videoRef, setProgress]
  )

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

    if (!video.paused) {
      requestId.current = requestAnimationFrame(updateProgress)
    }

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      if (requestId.current) cancelAnimationFrame(requestId.current)
    }
  }, [videoRef])

  return [progress, changeProgress] as const
}
