import { useVolume } from './useVolume'
import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext, useEffect } from 'react'

export const useVideoShortcuts = () => {
  const { ref, isCurrent, toggle, isShortcutsDisabled } = useContext(
    VideoContext
  ) as VideoValues
  const { volume, changeVolume } = useVolume(ref)
  const video = ref.current

  const handleKeydown = (event: globalThis.KeyboardEvent) => {
    if (!isCurrent || isShortcutsDisabled) return

    switch (event.key) {
      case ' ':
        event.preventDefault()
        toggle()
        break
      case 'ArrowLeft':
        event.preventDefault()
        if (video) video.currentTime -= 5
        break
      case 'ArrowRight':
        event.preventDefault()
        if (video) video.currentTime += 5
        break
      case 'ArrowUp':
        event.preventDefault()
        changeVolume(volume + 10)
        break
      case 'ArrowDown':
        event.preventDefault()
        changeVolume(volume - 10)
        break
    }
  }

  useEffect(() => {
    if (!isCurrent || isShortcutsDisabled) return

    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [handleKeydown, isShortcutsDisabled, isCurrent])
}
