import { getMe } from '../../services/api'
import { AccountInfoData } from './AccountInfoData'
import { AccountInfoError } from './AccountInfoError'
import { AccountInfoSkeleton } from './AccountInfoSkeleton'
import { useQuery } from '@tanstack/react-query'

export const AccountInfo = () => {
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-8'>
      {isSuccess && <AccountInfoData data={data} />}
      {isLoading && <AccountInfoSkeleton />}
      {isError && <AccountInfoError error={error} />}
    </div>
  )
}
