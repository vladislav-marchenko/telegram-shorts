import { getUser } from '../../services/api'
import { AccountInfoButtons } from './AccountInfoButtons'
import { AccountInfoData } from './AccountInfoData'
import { AccountInfoError } from './AccountInfoError'
import { AccountInfoSkeleton } from './AccountInfoSkeleton'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from '@tanstack/react-router'

export const AccountInfo = () => {
  const { params } = useMatch({ from: '/user/$userId' })
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId)
  })

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-8'>
      {isSuccess && <AccountInfoData data={data} />}
      {isLoading && <AccountInfoSkeleton />}
      {isError && <AccountInfoError error={error} />}
      <AccountInfoButtons />
    </div>
  )
}
