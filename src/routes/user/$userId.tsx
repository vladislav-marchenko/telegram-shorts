import { AccountInfo } from '@/components/Account/AccountInfo'
import { AccountVideos } from '@/components/Account/AccountVideos'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useMatch } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$userId')({
  component: Account
})

function Account() {
  const { params } = useMatch({ from: '/user/$userId' })
  const { isError } = useQuery({
    queryKey: ['user', params.userId],
    queryFn: () => getUser(params.userId)
  })

  return (
    <div className='flex h-full flex-col overflow-y-auto bg-neutral-900 p-4'>
      <AccountInfo />
      {!isError && <AccountVideos />}
    </div>
  )
}
