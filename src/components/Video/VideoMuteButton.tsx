import { Volume2, VolumeOff } from 'lucide-react'
import { useEffect, useState, type FC, type RefObject } from 'react'

export const VideoMuteButton: FC<{
  videoRef: RefObject<HTMLVideoElement | null>
}> = ({ videoRef }) => {
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) setIsMuted(video.muted)
  }, [videoRef])

  return (
    <button
      onClick={toggleMute}
      className='absolute right-4 bottom-[72px] cursor-pointer'
    >
      {!isMuted && <Volume2 size={28} />}
      {isMuted && <VolumeOff size={28} />}
    </button>
  )
}
