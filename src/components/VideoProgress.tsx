import { useEffect, useState, type FC, type RefObject } from 'react'

export const VideoProgress: FC<{
  videoRef: RefObject<HTMLVideoElement | null>
}> = ({ videoRef }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!videoRef.current) return

    videoRef.current.ontimeupdate = (event) => {
      const videoElement = event.currentTarget as HTMLVideoElement
      setProgress(videoElement.currentTime)
    }
  }, [videoRef])

  return (
    <div
      className='absolute bottom-0 h-0.5 w-full bg-neutral-300/50 transition-all duration-1000'
      style={{
        width: `${progress}%`
      }}
    />
  )
}
