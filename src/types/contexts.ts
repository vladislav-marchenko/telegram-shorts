import type { RefObject } from 'react'

export interface VideoValues {
  ref: RefObject<HTMLVideoElement | null>
  toggle: () => void
  isPaused: boolean
  progress: number
}
