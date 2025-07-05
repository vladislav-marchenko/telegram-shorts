import type { RefObject } from 'react'

export interface VideoValues {
  ref: RefObject<HTMLVideoElement | null>
  ratio: number
  toggle: () => void
  isManuallyPaused: boolean
}

export interface VolumeValues {
  volume: number
  isMuted: boolean
  toggleMute: () => void
  changeVolume: (value: number) => void
}
