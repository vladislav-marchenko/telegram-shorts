import { VideoSlider } from './VideoSlider/VideoSlider'
import { getUserVideos } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const UserVideos = () => {
  const { userId } = useParams({ from: '/video/user/$userId' })
  const { data, isSuccess, fetchNextPage } = useInfiniteQuery({
    queryKey: ['video', 'user', userId],
    queryFn: ({ pageParam }) => getUserVideos({ userId, page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) return pages.length + 1
    },
    initialPageParam: 1
  })

  return (
    <div className='h-dvh overflow-hidden'>
      {isSuccess && <VideoSlider data={data} fetchNextPage={fetchNextPage} />}
    </div>
  )
}
