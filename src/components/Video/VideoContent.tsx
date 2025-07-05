import { VideoBackButton } from './VideoBackButton'
import { VideoOverlay } from './VideoOverlay'
import { VideoSkeleton } from './VideoSkeleton'
import { VideoContext } from '@/contexts/VideoContext'
import { VolumeContext } from '@/contexts/VolumeContext'
import { useVideoPlayback } from '@/hooks/useVideoPlayback'
import { useVideoShortcuts } from '@/hooks/useVideoShortcuts'
import { cn } from '@/lib/utils'
import type { Video } from '@/types/api'
import type { VideoValues, VolumeValues } from '@/types/contexts'
import { useContext, useState, type FC } from 'react'

interface VideoContentProps extends Video {
  backButton: boolean
}

export const VideoContent: FC<VideoContentProps> = ({
  backButton,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, isCurrent, ratio, toggle } = useContext(
    VideoContext
  ) as VideoValues
  const { isMuted } = useContext(VolumeContext) as VolumeValues

  useVideoPlayback()
  useVideoShortcuts()

  return (
    <div
      className={cn(
        'relative flex h-dvh w-max items-center border-y border-neutral-900',
        {
          'max-[1200px]:w-full': ratio >= 1,
          'max-[720px]:w-full': ratio < 1
        }
      )}
    >
      {backButton && <VideoBackButton />}
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
        autoPlay={isCurrent}
        controls={false}
        loop
        muted={isMuted}
      />
      {isLoaded && <VideoOverlay {...props} />}
    </div>
  )
}
