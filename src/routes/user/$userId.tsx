import { AccountInfo } from '@/components/Account/AccountInfo/AccountInfo'
import { AccountVideos } from '@/components/Account/AccountVideos/AccountVideos'
import { getUser } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$userId')({
  component: AccountPage
})

function AccountPage() {
  const { userId } = useParams({ from: '/user/$userId' })
  const { isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId)
  })

  return (
    <div className='flex h-full flex-col bg-neutral-900 p-4'>
      <AccountInfo />
      {!isError && <AccountVideos />}
    </div>
  )
}
