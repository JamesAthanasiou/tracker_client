import { createLazyFileRoute } from '@tanstack/react-router'
import LoginForm from '../components/LoginForm'
import { login } from '../services/auth'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <LoginForm loginFunction={login} path="/login"/>
  )
}