import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  ),
})