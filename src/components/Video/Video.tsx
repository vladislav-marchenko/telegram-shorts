import { VideoContent } from './VideoContent'
import { VideoSkeleton } from './VideoSkeleton'
import { VideoContextProvider } from '@/contexts/VideoContext'
import type { Video as VideoType } from '@/types/api'
import { type FC } from 'react'

interface VideoProps extends VideoType {
  isCurrent?: boolean
}

export const Video: FC<VideoProps> = ({ isCurrent = true, ...props }) => {
  return (
    <VideoContextProvider>
      <VideoContent {...props} isCurrent={isCurrent} />
    </VideoContextProvider>
  )
}
