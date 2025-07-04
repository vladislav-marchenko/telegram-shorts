import { VolumeContextProvider } from '@/contexts/VolumeContext'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/video/_layout')({
  component: VideoLayout
})

function VideoLayout() {
  return (
    <VolumeContextProvider>
      <Outlet />
    </VolumeContextProvider>
  )
}
