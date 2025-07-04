import { VideoOverlay } from './VideoOverlay'
import { VideoSkeleton } from './VideoSkeleton'
import { VideoContext } from '@/contexts/VideoContext'
import { VolumeContext } from '@/contexts/VolumeContext'
import { useVideoShortcuts } from '@/hooks/useVideoShortcuts'
import { cn } from '@/lib/utils'
import type { Video as VideoType } from '@/types/api'
import type { VideoValues, VolumeValues } from '@/types/contexts'
import { useContext, useState, type FC } from 'react'

interface VideoProps extends VideoType {
  isCurrent?: boolean
}

export const Video: FC<VideoProps> = ({ isCurrent = true, ...props }) => {
  const { ref, ratio, isPaused, toggle } = useContext(
    VideoContext
  ) as VideoValues
  const { isMuted } = useContext(VolumeContext) as VolumeValues
  const [isLoaded, setIsLoaded] = useState(false)

  useVideoShortcuts({ enable: isCurrent })

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div
        className={cn('relative flex h-dvh w-max items-center', {
          'max-[1200px]:w-full': ratio >= 1,
          'max-[720px]:w-full': ratio < 1
        })}
      >
        {!isLoaded && <VideoSkeleton />}
        <video
          ref={ref}
          src={props.url}
          onClick={toggle}
          onLoadedData={() => setIsLoaded(true)}
          className={cn('h-full w-full', {
            hidden: !isLoaded,
            'max-[1200px]:object-cover': ratio >= 1,
            'max-[720px]:object-cover': ratio < 1
          })}
          playsInline
          autoPlay={isCurrent && !isPaused}
          controls={false}
          loop
          muted={isMuted}
        />
        {isLoaded && <VideoOverlay {...props} />}
      </div>
    </div>
  )
}
