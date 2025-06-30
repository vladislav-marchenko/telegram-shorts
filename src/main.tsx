import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx'
import reportWebVitals from './reportWebVitals.ts'
import { routeTree } from './routeTree.gen'
import './styles.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProvider.getContext()
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(
  <StrictMode>
    <TanStackQueryProvider.Provider>
      <RouterProvider router={router} />
    </TanStackQueryProvider.Provider>
  </StrictMode>
)

reportWebVitals()
