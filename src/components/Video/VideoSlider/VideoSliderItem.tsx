import { VideoContent } from '@/components/Video/VideoContent'
import { VideoContextProvider } from '@/contexts/VideoContext'
import { type Video as VideoType } from '@/types/api'
import { useEffect, type FC } from 'react'

interface VideosSliderItemProps extends VideoType {
  isVisible: boolean
  isCurrent: boolean
  fetchNextPage: () => void
  shouldFetchNextPage?: boolean
}

export const VideoSliderItem: FC<VideosSliderItemProps> = ({
  isVisible,
  isCurrent,
  fetchNextPage,
  shouldFetchNextPage,
  ...video
}) => {
  useEffect(() => {
    if (shouldFetchNextPage) fetchNextPage()
  }, [shouldFetchNextPage])

  return (
    <div className='flex h-dvh min-h-full w-full items-center justify-center'>
      <VideoContextProvider isVisible={isVisible} isCurrent={isCurrent}>
        <VideoContent {...video} />
      </VideoContextProvider>
    </div>
  )
}
