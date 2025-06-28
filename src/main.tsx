import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx'
import { init } from './integrations/telegram-app/initialize.ts'
import './integrations/telegram-app/mockEnv.ts'
import reportWebVitals from './reportWebVitals.ts'
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import './styles.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// Create a new router instance
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

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root = ReactDOM.createRoot(document.getElementById('app')!)

try {
  const launchParams = retrieveLaunchParams()
  const { tgWebAppPlatform: platform } = launchParams
  const debug =
    (launchParams.tgWebAppStartParam || '').includes('platformer_debug') ||
    import.meta.env.DEV

  // Configure all application dependencies.
  await init({
    debug,
    eruda: debug && ['ios', 'android'].includes(platform),
    mockForMacOS: platform === 'macos'
  }).then(() => {
    root.render(
      <StrictMode>
        <TanStackQueryProvider.Provider>
          <RouterProvider router={router} />
        </TanStackQueryProvider.Provider>
      </StrictMode>
    )
  })
} catch (e) {
  root.render(<span>Error</span>)
}

reportWebVitals()
