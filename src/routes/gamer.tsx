import { createFileRoute, redirect } from '@tanstack/react-router'
import Game from '../components/game/Game'
import { isAuthenticated } from '../services/auth'

export const Route = createFileRoute('/gamer')({
  component: Gamer,
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

function Gamer() {
  return (
    <div>
      <div className="p-2">Play the game</div>
      <div className="container">
        <div className="row">
          <Game />
        </div>
      </div>
    </div>
  )
}
