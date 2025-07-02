import { Error } from '../Error'
import { AccountVideosContent } from './AccountVideosContent'
import { AccountVideosContentEmpty } from './AccountVideosContentEmpty'
import { AccountVideosSkeleton } from './AccountVideosSkeleton'
import { getUserVideos } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'

export const AccountVideos = () => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { data, refetch, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['video', params.userId],
    queryFn: () => getUserVideos(params.userId)
  })

  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fit,minmax(126px,1fr))] justify-center gap-4 md:grid-cols-[repeat(auto-fit,minmax(156px,200px))]'>
      {isSuccess && !!data.length && <AccountVideosContent data={data} />}
      {isSuccess && !data.length && <AccountVideosContentEmpty />}
      {isLoading && <AccountVideosSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
