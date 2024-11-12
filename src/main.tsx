import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'
import CurrentUser from './components/CurrentUser'
import { UserContextProvider } from './app-context/user-context-provider'
import { headers, setHeaders } from './api'

// Create a new router instance
const router = createRouter({ routeTree })

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
        <CurrentUser />
        <RouterProvider router={router} />
      </UserContextProvider>
    </StrictMode>,
  )
}
