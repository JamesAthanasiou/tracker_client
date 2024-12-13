import { createFileRoute, redirect } from '@tanstack/react-router'
import FormFriendship from '../components/FormFriendship'
import CurrentFriends from '../components/CurrentFriends'
import { isAuthenticated } from '../services/auth'

// TODO: read.
// https://tanstack.com/router/v1/docs/framework/react/api/router/createLazyFileRouteFunction
export const Route = createFileRoute('/friends')({
  component: Friends,
  // TODO: move to other file.
  // TODO apply to all other protected routes. Create main protected route?
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})



function Friends() {

  return (
    <div>
      <h1>Friends Page</h1>
      <h2>Current Friends</h2>
      <CurrentFriends />
      <h2>Add a friend</h2>
      <FormFriendship />
    </div>
  )
}
