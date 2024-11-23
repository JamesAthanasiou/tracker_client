import { createLazyFileRoute } from '@tanstack/react-router'
import LoginForm from '../components/LoginForm'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <div>
      <div className="p-2">Login Form Page</div>
      <LoginForm />
    </div>
  )
}