import { VideoOverlay } from './VideoOverlay'
import { useRef, type FC } from 'react'

interface VideoProps {
  url: string
  isCurrent: boolean
}

export const Video: FC<VideoProps> = ({ url, isCurrent }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return

    video.paused ? video.play() : video.pause()
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
