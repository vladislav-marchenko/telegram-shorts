import { VideoOverlay } from './VideoOverlay'
import { VideoContext } from '@/contexts/VideoContext'
import { VolumeContext } from '@/contexts/VolumeContext'
import { cn } from '@/lib/utils'
import type { Video as VideoType } from '@/types/api'
import type { VideoValues, VolumeValues } from '@/types/contexts'
import { useContext, type FC } from 'react'

interface VideoProps extends VideoType {
  isCurrent: boolean
}

export const Video: FC<VideoProps> = ({ isCurrent, ...props }) => {
  const { ref, toggle } = useContext(VideoContext) as VideoValues
  const { isMuted } = useContext(VolumeContext) as VolumeValues

  const video = ref.current
  const width = video?.videoWidth ?? 0
  const height = video?.videoHeight ?? 0
  const ratio = width / height

  return (
    <div
      className={cn('relative flex h-dvh w-max items-center bg-neutral-800', {
        'max-[1200px]:w-full': ratio >= 1,
        'max-[720px]:w-full': ratio < 1
      })}
    >
      <video
        ref={ref}
        src={props.url}
        onClick={toggle}
        className={cn('h-full w-full', {
          'max-[1200px]:object-cover': ratio >= 1,
          'max-[720px]:object-cover': ratio < 1
        })}
        playsInline
        autoPlay={isCurrent}
        controls={false}
        loop
        muted={isMuted}
      />
      <VideoOverlay {...props} />
    </div>
  )
}
