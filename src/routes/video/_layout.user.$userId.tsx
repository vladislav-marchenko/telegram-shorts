import { UserVideos } from '@/components/Video/UserVideos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/video/_layout/user/$userId')({
  component: UserVideosPage
})

function UserVideosPage() {
  return <UserVideos />
}
