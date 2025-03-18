import { createFileRoute } from '@tanstack/react-router'
import PersonForm from '../components/PersonForm'
import AllPersons from '../components/AllPersons'
import { useEffect, useState } from 'react';
import Person from '../types/Person';
import { getAllPersons } from '../api';

export const Route = createFileRoute('/person/')({
  component: PersonManagement,
})

function PersonManagement() {
	const [persons, setPersons] = useState<Person[]>([]);

	useEffect(() => {
		let active = true;

		const fetchAllPersons = async () => {
			const data = await (getAllPersons()) as Person[];
			if (active) {
				setPersons(data);
			}
		}

		fetchAllPersons();
		return () => {
			active = false;
		};
	},[]);

	const personsListUpdated = async() => {
		const newPersons = await (getAllPersons()) as Person[];
		setPersons(newPersons);
	}

	return (
		<div>
			<div className="section-container">
				<div>People</div>
				<AllPersons persons={persons}/>
			</div>
			<div className="section-container">
				<div>Add a person</div>
				<PersonForm updateParent={personsListUpdated}/>
			</div>
			<div className="section-container">
				<div className="p-2">Remove a person</div>
				{/* TODO dropdown */}
			</div>
		</div>
	)
}
