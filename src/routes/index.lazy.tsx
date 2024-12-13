import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <div className="p-2">
        <h3>Welcome Home!</h3>
        <p>This is an empty page. Not sure what should go here.</p>
      </div>

    </div>
  )
}