import { VolumeContext } from '@/contexts/VolumeContext'
import type { VolumeValues } from '@/types/contexts'
import { useCallback, useContext, useEffect, type RefObject } from 'react'

export const useVolume = (ref: RefObject<HTMLVideoElement | null>) => {
  const {
    isMuted,
    toggleMute: toggleGlobalMute,
    volume,
    changeVolume: changeGlobalVolume
  } = useContext(VolumeContext) as VolumeValues
  const video = ref.current

  const toggleMute = useCallback(() => {
    if (!video) return

    video.muted = !video.muted
    toggleGlobalMute()
  }, [video])

  const changeVolume = useCallback(
    (value: number) => {
      if (!video) return
      if (isMuted) toggleMute()

      let newVolume = value / 100
      if (newVolume < 0) newVolume = 0
      if (newVolume > 1) newVolume = 1

      video.volume = newVolume
      changeGlobalVolume(newVolume)
    },
    [video, isMuted]
  )

  useEffect(() => {
    const video = ref.current
    if (!video) return

    video.volume = volume
  }, [ref, volume])

  return { volume: volume * 100, toggleMute, changeVolume }
}
