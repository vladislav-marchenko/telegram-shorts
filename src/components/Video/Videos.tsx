import { VideoSkeleton } from './VideoSkeleton'
import { VideosSlider } from './VideosSlider'
import { Error } from '@/components/Error'
import { getFeed } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'

export const Videos = () => {
  const { data, refetch, fetchNextPage, isSuccess, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['video', 'feed'],
      queryFn: ({ pageParam }) => getFeed(pageParam),
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.hasMore) return pages.length + 1
      },
      initialPageParam: 1
    })

  return (
    <div className='h-dvh overflow-hidden'>
      {isSuccess && <VideosSlider data={data} fetchNextPage={fetchNextPage} />}
      {isLoading && <VideoSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
