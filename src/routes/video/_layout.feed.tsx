import { Videos } from '@/components/Video/Videos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/video/_layout/feed')({
  component: Feed
})

function Feed() {
  return <Videos />
}
