import { Videos } from '@/components/Video/Videos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return <Videos />
}
