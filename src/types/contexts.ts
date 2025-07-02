import type { RefObject } from 'react'

export interface VideoValues {
  ref: RefObject<HTMLVideoElement | null>
  toggle: () => void
  isPaused: boolean
  progress: number
}

export interface VolumeValues {
  volume: number
  isMuted: boolean
  toggleMute: () => void
  changeVolume: (value: number) => void
}
