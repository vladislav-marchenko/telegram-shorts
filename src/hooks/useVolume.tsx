import { VolumeContext } from '@/contexts/VolumeContext'
import type { VolumeValues } from '@/types/contexts'
import { useContext, useEffect, type RefObject } from 'react'

export const useVolume = (ref: RefObject<HTMLVideoElement | null>) => {
  const {
    isMuted,
    toggleMute: toggleGlobalMute,
    volume,
    changeVolume: changeGlobalVolume
  } = useContext(VolumeContext) as VolumeValues
  const video = ref.current

  const toggleMute = () => {
    if (!video) return

    video.muted = !video.muted
    toggleGlobalMute()
  }

  const changeVolume = (value: number[]) => {
    if (!video) return

    if (isMuted) toggleMute()
    const newVolume = value[0] / 100
    video.volume = newVolume
    changeGlobalVolume(newVolume)
  }

  useEffect(() => {
    const video = ref.current
    if (!video) return

    video.volume = volume
  }, [ref, volume])

  return { toggleMute, changeVolume }
}
