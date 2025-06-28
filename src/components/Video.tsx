import { VideoOverlay } from './VideoOverlay'
import { useRef, type FC } from 'react'

interface VideoProps {
  url: string
  isCurrent: boolean
}

export const Video: FC<VideoProps> = ({ url, isCurrent }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const holdTimeoutRef = useRef<number | null>(null)

  const toggle = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }

    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current)
  }

  return (
    <div className='relative h-full w-full bg-neutral-800'>
      <video
        ref={videoRef}
        src={url}
        onClick={toggle}
        className='h-full w-full object-cover'
        playsInline
        autoPlay={isCurrent}
        controls={false}
        loop
        muted
      />
      <VideoOverlay videoRef={videoRef} />
    </div>
  )
}
