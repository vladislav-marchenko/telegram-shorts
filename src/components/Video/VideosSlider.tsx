import { Video } from './Video'
import { VideoContextProvider } from '@/contexts/VideoContext'
import { useVideosSlider } from '@/hooks/useVideosSlider'
import type { Video as VideoType } from '@/types/api'
import { type FC } from 'react'

interface VideosSliderProps {
  data: VideoType[]
  startIndex?: number
}

export const VideosSlider: FC<VideosSliderProps> = ({ data, startIndex }) => {
  const { emblaRef, slidesRef, currentIndex } = useVideosSlider({ startIndex })

  return (
    <div ref={emblaRef} className='h-full w-full'>
      <div ref={slidesRef} className='flex h-full flex-col'>
        {data.map((video, index) => {
          return (
            <VideoContextProvider key={video._id}>
              <Video {...video} isCurrent={index === currentIndex} />
            </VideoContextProvider>
          )
        })}
      </div>
    </div>
  )
}
