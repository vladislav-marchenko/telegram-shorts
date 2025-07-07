import type { Comment } from './api'
import type { Dispatch, RefObject, SetStateAction } from 'react'

export interface VideoValues {
  ref: RefObject<HTMLVideoElement | null>
  isCurrent: boolean
  toggle: () => void
  isManuallyPaused: boolean
  setIsManuallyPaused: Dispatch<SetStateAction<boolean>>
  isShortcutsDisabled: boolean
  setIsShortcutsDisabled: Dispatch<SetStateAction<boolean>>
}

export interface VolumeValues {
  volume: number
  isMuted: boolean
  toggleMute: () => void
  changeVolume: (value: number) => void
}

export interface CommentsValues {
  replyingTo: Comment | null
  setReplyingTo: Dispatch<SetStateAction<Comment | null>>
}
