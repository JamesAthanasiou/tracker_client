import { createLazyFileRoute } from '@tanstack/react-router'
import PersonForm from '../components/PersonForm'
import AllPersons from '../components/AllPersons'

export const Route = createLazyFileRoute('/person')({
  component: PersonManagement,
})

function PersonManagement() {
  return (
    <div>
      <div className="section-container">
        <div>People</div>
        <AllPersons />
      </div>
      <div className="section-container">
        <div>Add a person</div>
        <PersonForm />
      </div>
      <div className="section-container">
        <div className="p-2">Remove a person</div>
        {/* TODO dropdown */}
      </div>
    </div>
  )
}
