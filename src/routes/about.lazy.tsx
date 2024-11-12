import { createLazyFileRoute } from '@tanstack/react-router'
import { TestFetchBlock } from '../components/TestFetchBlock'
import AForm from '../components/Form'
import FormFriendship from '../components/FormFriendship'
import { getProtectedRouteTest } from '../api'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

async function getValues() {
  const res = await getProtectedRouteTest();
  console.log(res);
}

function About() {
  return (
    <div>
      <div className="p-2">Hello from About!</div>
      <TestFetchBlock />
      <AForm />
      <FormFriendship />
      {/* TODO remove, this is just an authentication test */}
      <button onClick={getValues}>
        Authentication Test
      </button>
    </div>
  )
}