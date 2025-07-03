import { Error } from '../Error'
import { AccountInfoButtons } from './AccountInfoButtons'
import { AccountInfoData } from './AccountInfoData'
import { AccountInfoSkeleton } from './AccountInfoSkeleton'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'

export const AccountInfo = () => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { data, refetch, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId)
  })

  return (
    <div className='flex flex-col items-center justify-center gap-4 py-8'>
      {isSuccess && <AccountInfoData data={data} />}
      {isLoading && <AccountInfoSkeleton />}
      {isError && <Error error={error} refetch={refetch} />}
      {!isError && <AccountInfoButtons />}
    </div>
  )
}
