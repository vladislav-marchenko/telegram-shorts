import { Video } from './Video'
import { VideoContextProvider } from '@/contexts/VideoContext'
import { useVideosSlider } from '@/hooks/useVideosSlider'
import type { Video as VideoType } from '@/types/api'
import type { FC } from 'react'

export const VideosSlider: FC<{ data: VideoType[] }> = ({ data }) => {
  const { emblaRef, slidesRef, currentIndex } = useVideosSlider()

  return (
    <div ref={emblaRef} className='h-full w-full'>
      <div ref={slidesRef} className='flex h-full flex-col'>
        {data.map((video, index) => {
          return (
            <VideoContextProvider key={video._id}>
              <div className='flex h-full w-full shrink-0 items-center justify-center md:px-16'>
                <Video {...video} isCurrent={index === currentIndex} />
              </div>
            </VideoContextProvider>
          )
        })}
      </div>
    </div>
  )
}
