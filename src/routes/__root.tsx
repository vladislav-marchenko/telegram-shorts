import { Navigation } from '@/components/Navigation.tsx'
import { Toaster } from '@/components/ui/sonner'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className='flex h-dvh flex-col bg-neutral-800'>
      <Outlet />
      <Navigation />
      <Toaster richColors position='top-center' />
      <ReactQueryDevtools />
    </div>
  )
})
