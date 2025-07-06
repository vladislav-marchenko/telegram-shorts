import { AccountInfoButtons } from './AccountInfoButtons'
import { AccountInfoData } from './AccountInfoData'
import { AccountInfoSkeleton } from './AccountInfoSkeleton'
import { Error } from '@/components/Error'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const AccountInfo = () => {
  const { userId } = useParams({ from: '/user/$userId' })
  const { data, refetch, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId)
  })

  return (
    <div className='flex h-full flex-col items-center justify-center gap-4 py-8'>
      {isSuccess && <AccountInfoData data={data} />}
      {isLoading && <AccountInfoSkeleton />}
      {isError && <Error error={error} refetch={refetch} className='h-full' />}
      {!isError && <AccountInfoButtons />}
    </div>
  )
}
