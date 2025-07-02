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
    <div className='flex h-full flex-wrap justify-center gap-4'>
      {isSuccess && !!data.length && <AccountVideosContent data={data} />}
      {isSuccess && !data.length && <AccountVideosContentEmpty />}
      {isLoading && <AccountVideosSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
