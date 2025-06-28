import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: Profile
})

function Profile() {
  return <div className='h-full bg-neutral-900'>Hello "/profile"!</div>
}
