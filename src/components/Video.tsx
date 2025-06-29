import { VideoOverlay } from './VideoOverlay'
import { VideoContext } from '@/contexts/VideoContext'
import type { VideoValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

interface VideoProps {
  url: string
  isCurrent: boolean
}

export const Video: FC<VideoProps> = ({ url, isCurrent }) => {
  const { ref, toggle } = useContext(VideoContext) as VideoValues

  return (
    <div className='relative h-full w-full bg-neutral-800'>
      <video
        ref={ref}
        src={url}
        onClick={toggle}
        className='h-full w-full object-cover'
        playsInline
        autoPlay={isCurrent}
        controls={false}
        loop
        muted
      />
      <VideoOverlay />
    </div>
  )
}
