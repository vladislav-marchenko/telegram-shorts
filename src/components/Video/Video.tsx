import { VideoContent } from './VideoContent'
import { VideoContextProvider } from '@/contexts/VideoContext'
import type { Video as VideoType } from '@/types/api'
import { type FC } from 'react'

interface VideoProps extends VideoType {
  isCurrent?: boolean
  isVisible?: boolean
  backButton?: boolean
}

export const Video: FC<VideoProps> = ({
  isCurrent = true,
  isVisible = true,
  backButton = false,
  ...props
}) => {
  return (
    <VideoContextProvider isVisible={isVisible} isCurrent={isCurrent}>
      <VideoContent {...props} backButton={backButton} />
    </VideoContextProvider>
  )
}
