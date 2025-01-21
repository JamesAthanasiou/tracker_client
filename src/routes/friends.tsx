import { createFileRoute, redirect } from '@tanstack/react-router'
import FormFriendship from '../components/FriendshipForm'
import CurrentFriends from '../components/CurrentFriends'
import { isAuthenticated } from '../services/auth'
import { useContext } from 'react'
import { UserContext } from '../app-context/user-context'

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

  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>Friends Page</h1>
      <h2>Current Friends</h2>
      <CurrentFriends person_id={user!.person_id}/>
      {/* TODO: change to add friendship between two people */}
      <h2>Add a friend</h2>
      <FormFriendship />
    </div>
  )
}
