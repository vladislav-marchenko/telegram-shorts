import { AccountVideosContent } from './AccountVideosContent'
import { AccountVideosSkeleton } from './AccountVideosSkeleton'
import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { getUserVideos } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { useMemo } from 'react'

export const AccountVideos = () => {
  const { userId } = useParams({ from: '/user/$userId' })
  const { data, refetch, fetchNextPage, isSuccess, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['video', 'user', userId],
      queryFn: ({ pageParam }) => getUserVideos({ userId, page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.hasNext) return pages.length + 1
      }
    })

  const videos = useMemo(() => {
    if (!data) return []
    return data.pages.flatMap(({ videos }) => videos)
  }, [data])

  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fit,minmax(126px,1fr))] justify-center gap-4 md:grid-cols-[repeat(auto-fit,minmax(156px,200px))]'>
      {isSuccess && !!videos.length && (
        <AccountVideosContent data={videos} fetchNextPage={fetchNextPage} />
      )}
      {isSuccess && !videos.length && <Empty title='No videos found' />}
      {isLoading && <AccountVideosSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
