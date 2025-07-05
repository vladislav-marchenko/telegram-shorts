import { useEffect, useState, type RefObject } from 'react'

export const useVideoRatio = (
  ref: RefObject<HTMLVideoElement | null>,
  { enabled }: { enabled: boolean }
) => {
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    const video = ref.current
    if (!video || !enabled) return

    setRatio(video.videoWidth / video.videoHeight)
  }, [ref, enabled])

  return ratio
}
