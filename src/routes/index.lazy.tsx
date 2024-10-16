import { createLazyFileRoute } from '@tanstack/react-router'
import Game from '../components/game/Game'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
      <div className='container'>
        <div className='row'>
          <Game />
        </div>
      </div>
    </div>
  )
}