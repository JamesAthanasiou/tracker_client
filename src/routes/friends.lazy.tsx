import { createLazyFileRoute } from '@tanstack/react-router'
import FormFriendship from '../components/FormFriendship'
import CurrentFriends from '../components/CurrentFriends'

export const Route = createLazyFileRoute('/friends')({
  component: Friends,
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
