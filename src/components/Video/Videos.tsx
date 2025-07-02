import { Error } from '../Error'
import { VideosSkeleton } from './VideosSkeleton'
import { VideosSlider } from './VideosSlider'
import { getFeed } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const Videos = () => {
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['video', 'feed'],
    queryFn: getFeed
  })

  return (
    <div className='h-full'>
      {isSuccess && <VideosSlider data={data} />}
      {isLoading && <VideosSkeleton />}
      {isError && <Error error={error} />}
    </div>
  )
}
