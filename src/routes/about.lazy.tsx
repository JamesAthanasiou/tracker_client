import { createLazyFileRoute } from '@tanstack/react-router'
import AForm from '../components/Form'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <div className="p-2">Hello from About!</div>
      {/* TODO, move the add people form? */}
      <AForm />
    </div>
  )
}