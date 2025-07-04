import { VideoSkeleton } from './VideoSkeleton'
import { VideosSlider } from './VideosSlider'
import { Error } from '@/components/Error'
import { getFeed } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const Videos = () => {
  const { data, refetch, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['video', 'feed'],
    queryFn: getFeed
  })

  return (
    <div className='h-dvh overflow-hidden'>
      {isSuccess && <VideosSlider data={data} />}
      {isLoading && <VideoSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
