import { Videos } from '@/components/Video/Videos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/video/feed')({
  component: Feed
})

function Feed() {
  return <Videos />
}
