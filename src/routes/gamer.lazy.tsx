import { createLazyFileRoute } from '@tanstack/react-router'
import Game from '../components/game/Game'

export const Route = createLazyFileRoute('/gamer')({
  component: Gamer,
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
