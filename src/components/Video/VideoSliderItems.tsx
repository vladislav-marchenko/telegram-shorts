import { Video } from './Video'
import { type Video as VideoType } from '@/types/api'
import type { FC } from 'react'

export const VideosSliderItems: FC<{
  data: VideoType[]
  currentIndex: number
}> = ({ data, currentIndex }) => {
  return data.map((video, index) => {
    const isVisible = Math.abs(currentIndex - index) <= 1

    return (
      <div
        key={video._id}
        className='flex h-dvh min-h-full w-full items-center justify-center'
      >
        <Video
          {...video}
          isCurrent={index === currentIndex}
          isVisible={isVisible}
        />
      </div>
    )
  })
}
