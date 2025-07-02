import { VolumeContext } from '@/contexts/VolumeContext'
import type { VolumeValues } from '@/types/contexts'
import { Volume2, VolumeOff } from 'lucide-react'
import { useContext, type FC, type RefObject } from 'react'

export const VideoMuteButton: FC<{
  videoRef: RefObject<HTMLVideoElement | null>
}> = ({ videoRef }) => {
  const { isMuted, toggleMute } = useContext(VolumeContext) as VolumeValues

  const toggle = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    toggleMute()
  }

  return (
    <button
      onClick={toggle}
      className='absolute right-4 bottom-[72px] cursor-pointer'
    >
      {!isMuted && <Volume2 size={28} />}
      {isMuted && <VolumeOff size={28} />}
    </button>
  )
}
