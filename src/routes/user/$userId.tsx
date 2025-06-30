import { AccountInfo } from '@/components/Account/AccountInfo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$userId')({
  component: Account
})

function Account() {
  return (
    <div className='flex h-full flex-col overflow-y-auto bg-neutral-900 p-4'>
      <AccountInfo />
      {/*<AccountVideos />*/}
    </div>
  )
}
