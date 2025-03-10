import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { NotFoundRoute, RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'
import { UserContextProvider } from './app-context/user-context-provider'
import { headers, setHeaders } from './api'
import { Route as rootRoute} from './routes/__root'

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => '404 Not Found',
})

export const router = createRouter({ routeTree, notFoundRoute })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

setHeaders(headers);

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </StrictMode>,
  )
}
