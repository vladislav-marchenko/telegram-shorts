import { AccountInfo } from '@/components/Account/AccountInfo'
import { AccountVideos } from '@/components/Account/AccountVideos'
import { Upload } from '@/components/Upload/Upload'
import { createFileRoute, useMatch } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$userId')({
  component: Account
})

function Account() {
  const { params } = useMatch({ from: '/user/$userId' })

  return (
    <div className='relative flex h-full flex-col overflow-y-auto bg-neutral-900 p-4'>
      <AccountInfo />
      <AccountVideos />
      {params.userId === 'me' && <Upload />}
    </div>
  )
}
