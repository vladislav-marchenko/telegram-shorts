import { useProgress } from './useProgress'
import { useVolume } from './useVolume'
import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext, useEffect } from 'react'

export const useVideoShortcuts = ({ enable }: { enable: boolean }) => {
  const { ref, toggle } = useContext(VideoContext) as VideoValues
  const [progress, changeProgress] = useProgress(ref)
  const { volume, changeVolume } = useVolume(ref)

  const handleKeydown = (event: globalThis.KeyboardEvent) => {
    switch (event.key) {
      case ' ':
        event.preventDefault()
        toggle()
        break
      case 'ArrowLeft':
        event.preventDefault()
        changeProgress(progress - 10)
        break
      case 'ArrowRight':
        event.preventDefault()
        changeProgress(progress + 10)
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
    if (!enable) return

    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [handleKeydown])
}
