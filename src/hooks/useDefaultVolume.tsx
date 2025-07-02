import { VolumeContext } from '@/contexts/VolumeContext'
import type { VolumeValues } from '@/types/contexts'
import { useContext, useEffect, type RefObject } from 'react'

export const useDefaultVolume = (ref: RefObject<HTMLVideoElement | null>) => {
  const { volume } = useContext(VolumeContext) as VolumeValues

  useEffect(() => {
    const video = ref.current
    if (!video) return

    video.volume = volume
  }, [ref, volume])
}
