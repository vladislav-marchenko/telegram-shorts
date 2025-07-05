import { VideoContent } from './VideoContent'
import { VideoContextProvider } from '@/contexts/VideoContext'
import type { Video as VideoType } from '@/types/api'
import { memo, type FC } from 'react'

interface VideoProps extends VideoType {
  isCurrent?: boolean
  isVisible: boolean
}

export const Video: FC<VideoProps> = memo(
  ({ isCurrent = true, isVisible, ...props }) => {
    return (
      <VideoContextProvider isVisible={isVisible}>
        <VideoContent {...props} isCurrent={isCurrent} />
      </VideoContextProvider>
    )
  }
)
