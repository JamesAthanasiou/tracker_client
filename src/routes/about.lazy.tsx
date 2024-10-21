import { createLazyFileRoute } from '@tanstack/react-router'
import { TestFetchBlock } from '../components/TestFetchBlock'
import { TestPerson } from '../components/TestPerson'
import { PersonForm } from '../components/PersonForm'
import AForm from '../components/Form'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <div className="p-2">Hello from About!</div>
      <TestFetchBlock />
      <AForm />
    </div>
  )
}