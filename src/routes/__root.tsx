import { Navigation } from '@/components/Navigation.tsx'
import type { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className='flex h-dvh flex-col overflow-hidden bg-neutral-800'>
      <Outlet />
      <Navigation />
    </div>
  )
})
