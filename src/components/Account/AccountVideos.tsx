import { Error } from '../Error'
import { AccountVideosContent } from './AccountVideosContent'
import { AccountVideosContentEmpty } from './AccountVideosContentEmpty'
import { AccountVideosSkeleton } from './AccountVideosSkeleton'
import { getMyVideos } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const AccountVideos = () => {
  const { data, refetch, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['video', 'me'],
    queryFn: getMyVideos
  })

  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fit,minmax(126px,1fr))] justify-center gap-4 lg:grid-cols-[repeat(auto-fit,minmax(156px,200px))]'>
      {isSuccess && !!data.length && <AccountVideosContent data={data} />}
      {isSuccess && !data.length && <AccountVideosContentEmpty />}
      {isLoading && <AccountVideosSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
