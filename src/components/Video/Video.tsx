import { VideoContent } from './VideoContent'
import { VideoContextProvider } from '@/contexts/VideoContext'
import type { Video as VideoType } from '@/types/api'
import { type FC } from 'react'

interface VideoProps extends VideoType {
  isCurrent?: boolean
  isVisible: boolean
}

export const Video: FC<VideoProps> = ({
  isCurrent = true,
  isVisible,
  ...props
}) => {
  return (
    <VideoContextProvider isVisible={isVisible} isCurrent={isCurrent}>
      <VideoContent {...props} isCurrent={isCurrent} />
    </VideoContextProvider>
  )
}
