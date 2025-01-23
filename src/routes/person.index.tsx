import { createFileRoute } from '@tanstack/react-router'
import PersonForm from '../components/PersonForm'
import AllPersons from '../components/AllPersons'

export const Route = createFileRoute('/person/')({
  component: PersonManagement,
})

// // TOOD add protected route
// export const Route = createFileRoute('/person/')({
//   component: Friends,
//   // TODO apply to all other protected routes. Create main protected route?
//   beforeLoad: async ({ location }) => {
//     if (!isAuthenticated()) {
//       throw redirect({
//         to: '/login',
//         search: {
//           redirect: location.href,
//         },
//       })
//     }
//   },
// })

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
