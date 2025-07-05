import { VideosSlider } from './VideosSlider'
import { getUserVideos } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const UserVideos = () => {
  const { userId } = useParams({ from: '/video/_layout/user/$userId' })
  const { data, isSuccess, fetchNextPage } = useInfiniteQuery({
    queryKey: ['video', 'user', userId],
    queryFn: ({ pageParam }) => getUserVideos({ userId, page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasMore) return pages.length + 1
    },
    initialPageParam: 1
  })

  return (
    <div className='h-dvh overflow-hidden'>
      {isSuccess && <VideosSlider data={data} fetchNextPage={fetchNextPage} />}
    </div>
  )
}
