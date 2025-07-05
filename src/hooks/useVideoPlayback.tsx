import {
  useEffect,
  type Dispatch,
  type RefObject,
  type SetStateAction
} from 'react'

export const useVideoPlayback = (
  ref: RefObject<HTMLVideoElement | null>,
  {
    isCurrent,
    setIsManuallyPaused
  }: {
    isCurrent: boolean
    setIsManuallyPaused: Dispatch<SetStateAction<boolean>>
  }
) => {
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
