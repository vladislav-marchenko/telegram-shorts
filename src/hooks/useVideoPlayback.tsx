import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext, useEffect } from 'react'

export const useVideoPlayback = () => {
  const { ref, isCurrent, setIsManuallyPaused } = useContext(
    VideoContext
  ) as VideoValues

  useEffect(() => {
    const video = ref.current
    if (!video) return

    if (isCurrent) {
      video.play()
    } else {
      video.pause()
      video.currentTime = 0
    }

    setIsManuallyPaused(false)
  }, [ref, isCurrent])
}
