import { createLazyFileRoute } from '@tanstack/react-router'
import { TestFetchBlock } from '../TestFetchBlock'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <div className="p-2">Hello from About!</div>
      <TestFetchBlock />
    </div>
  )
}