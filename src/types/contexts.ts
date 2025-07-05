import type { RefObject } from 'react'

export interface VideoValues {
  ref: RefObject<HTMLVideoElement | null>
  ratio: number
  toggle: () => void
  isPaused: boolean
  volume: number
  changeVolume: (value: number) => void
  toggleMute: () => void
}

export interface VolumeValues {
  volume: number
  isMuted: boolean
  toggleMute: () => void
  changeVolume: (value: number) => void
}
