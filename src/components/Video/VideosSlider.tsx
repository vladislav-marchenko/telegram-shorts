import { Video } from './Video'
import { VideoSkeleton } from './VideoSkeleton'
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
          const isVisible = Math.abs(currentIndex - index) <= 1
          if (!isVisible) return <VideoSkeleton />

          return (
            <div
              key={video._id}
              className='flex h-dvh w-full items-center justify-center'
            >
              <Video {...video} isCurrent={index === currentIndex} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
