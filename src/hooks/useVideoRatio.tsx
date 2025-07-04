import { useEffect, useState, type RefObject } from 'react'

export const useVideoRatio = (ref: RefObject<HTMLVideoElement | null>) => {
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    setRatio(video.videoWidth / video.videoHeight)
  }, [ref])

  return ratio
}
