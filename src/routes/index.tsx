import { createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '../services/auth'

export const Route = createFileRoute('/')({
  component: Index,
    beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
      to: '/login',
      search: {
        redirect: location.href,
      },
      })
    }
    }
})

function Index() {
  return (
    <div>
      <div className="p-2">
        <h3>Welcome Home!</h3>
        <p>This is an empty page. Not sure what should go here.</p>
      </div>

    </div>
  )
}