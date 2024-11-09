import { createLazyFileRoute } from '@tanstack/react-router'
import LoginForm from '../components/LoginForm'
import { useContext } from 'react'
import { UserContext } from '../app-context/user-context'
import { CurrentUser } from '../types/CurrentUser'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  const { updateState } = useContext(UserContext);

  const signIn = async (user: CurrentUser): Promise<void> => {
    await updateState({user: user});
  }

  return (
    <div>
      <div className="p-2">Login Form Page</div>
      <LoginForm setUserObject={signIn} />
    </div>
  )
}