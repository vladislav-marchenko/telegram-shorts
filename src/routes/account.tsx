import { AccountInfo } from '@/components/Account/AccountInfo'
import { AccountVideos } from '@/components/Account/AccountVideos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account')({
  component: Account
})

function Account() {
  console.log(window.Telegram.WebApp.initData)

  return (
    <div className='flex h-full flex-col overflow-y-auto bg-neutral-900 p-4'>
      <AccountInfo isEditable />
      <AccountVideos />
    </div>
  )
}
