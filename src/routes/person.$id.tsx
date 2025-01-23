import { createFileRoute } from '@tanstack/react-router'
import { getPerson } from '../api'
import Person from '../types/Person';
import PersonSingle from '../components/PersonSingle';

export const Route = createFileRoute('/person/$id')({
  loader: ({ params: { id }}) => getPerson(id),
  component: PostComponent,
})

// JTODO read. https://tanstack.com/router/v1/docs/framework/react/guide/data-loading

function PostComponent() {

  const person = Route.useLoaderData() as Person;

  return (<PersonSingle person={person} />)
}
