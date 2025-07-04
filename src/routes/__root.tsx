import { Navigation } from '@/components/Navigation.tsx'
import { Toaster } from '@/components/ui/sonner'
import { VolumeContextProvider } from '@/contexts/VolumeContext'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className='relative flex min-h-dvh flex-col bg-neutral-900'>
      <VolumeContextProvider>
        <main className='flex-auto overflow-y-auto'>
          <Outlet />
        </main>
      </VolumeContextProvider>
      <Navigation />
      <Toaster richColors position='top-center' />
      <ReactQueryDevtools />
    </div>
  )
})
