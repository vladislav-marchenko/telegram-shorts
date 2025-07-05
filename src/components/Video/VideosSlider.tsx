import { VideosSliderItem } from './VideosSliderItem'
import { useVideosSlider } from '@/hooks/useVideosSlider'
import type { InfiniteVideos } from '@/types/api'
import { useMemo, type FC } from 'react'

interface VideosSliderProps {
  data: { pages: InfiniteVideos[] }
  fetchNextPage: () => void
}

// Using URLSearchParams instead of useSearch to avoid unnecessary re-renders when the carousel updates the video index.
const searchParams = new URLSearchParams(window.location.search)
const startIndex = parseInt(searchParams.get('index') || '0', 10)

export const VideosSlider: FC<VideosSliderProps> = ({
  data,
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
