import { VideosSliderItems } from './VideoSliderItems'
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
        <VideosSliderItems data={data} currentIndex={currentIndex} />
      </div>
    </div>
  )
}
