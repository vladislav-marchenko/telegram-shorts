import { AccountInfo } from '@/components/Account/AccountInfo'
import { UploadVideo } from '@/components/Upload/UploadVideo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$userId')({
  component: Account
})

function Account() {
  return (
    <div className='relative flex h-full flex-col overflow-y-auto bg-neutral-900 p-4'>
      <AccountInfo />
      {/*<AccountVideos />*/}
      <UploadVideo />
    </div>
  )
}
