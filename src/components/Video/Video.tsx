import { VideoOverlay } from './VideoOverlay'
import { VideoContext } from '@/contexts/VideoContext'
import type { Video as VideoType } from '@/types/api'
import type { VideoValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

interface VideoProps extends VideoType {
  isCurrent: boolean
}

export const Video: FC<VideoProps> = ({ isCurrent, ...props }) => {
  const { ref, toggle } = useContext(VideoContext) as VideoValues

  return (
    <div className='relative h-full w-max bg-neutral-800 max-[520px]:w-full'>
      <video
        ref={ref}
        src={props.url}
        onClick={toggle}
        className='h-dvh w-full max-[520px]:object-cover'
        playsInline
        autoPlay={isCurrent}
        controls={false}
        loop
        muted
      />
      <VideoOverlay {...props} />
    </div>
  )
}
