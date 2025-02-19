import { createLazyFileRoute } from '@tanstack/react-router'
import LoginForm from '../components/LoginForm'
import { signup } from '../services/auth'

export const Route = createLazyFileRoute('/signup')({
  component: Signup,
})

function Signup() {
  return (
    <div>
      <LoginForm loginFunction={signup} path="/signup"/>
    </div>
  )
}
