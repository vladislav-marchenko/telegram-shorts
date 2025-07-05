import { VideosSliderItem } from './VideosSliderItems'
import { useVideosSlider } from '@/hooks/useVideosSlider'
import type { InfiniteVideos } from '@/types/api'
import { useMemo, type FC } from 'react'

interface VideosSliderProps {
  data: { pages: InfiniteVideos[] }
  startIndex?: number
  fetchNextPage?: () => void
}

export const VideosSlider: FC<VideosSliderProps> = ({
  data,
  startIndex,
  fetchNextPage
}) => {
  const { emblaRef, slidesRef, currentIndex } = useVideosSlider({ startIndex })
  const videos = useMemo(() => {
    return data.pages.flatMap(({ videos }) => videos)
  }, [data])

  return (
    <div ref={emblaRef} className='h-full w-full'>
      <div ref={slidesRef} className='flex h-full flex-col'>
        {videos.map((video, index) => {
          const isVisible = Math.abs(currentIndex - index) <= 1 // Current, previous, next
          const isLast = index === videos.length - 1
          const shouldFetchNextPage = isVisible && isLast // isVisible && isLast guarantee that the user has scrolled to the end

          return (
            <VideosSliderItem
              key={video._id}
              isVisible={isVisible}
              isCurrent={currentIndex === index}
              shouldFetchNextPage={shouldFetchNextPage}
              fetchNextPage={fetchNextPage}
              {...video}
            />
          )
        })}
      </div>
    </div>
  )
}
