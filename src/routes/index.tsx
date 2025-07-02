import { Videos } from '@/components/Video/Videos'
import { VolumeContextProvider } from '@/contexts/VolumeContext'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return (
    <VolumeContextProvider>
      <Videos />
    </VolumeContextProvider>
  )
}
