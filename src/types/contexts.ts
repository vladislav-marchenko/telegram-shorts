import type { Dispatch, RefObject, SetStateAction } from 'react'

export interface VideoValues {
  ref: RefObject<HTMLVideoElement | null>
  isCurrent: boolean
  toggle: () => void
  isManuallyPaused: boolean
  setIsManuallyPaused: Dispatch<SetStateAction<boolean>>
}

export interface VolumeValues {
  volume: number
  isMuted: boolean
  toggleMute: () => void
  changeVolume: (value: number) => void
}
