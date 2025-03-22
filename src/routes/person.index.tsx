import { createFileRoute } from '@tanstack/react-router'
import PersonForm from '../components/PersonForm'
import AllPersons from '../components/AllPersons'
import { useEffect, useState } from 'react';
import Person from '../types/Person';
import { getAllPersons } from '../api';
import { Box, Grid2 as Grid, Typography } from '@mui/material';

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
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid size={8}>
					<div>
						<Typography variant="h4" component="h1">
							People
						</Typography>
						<AllPersons persons={persons}/>
					</div>
				</Grid>
				<Grid size={4}>
					<div>
						<Typography variant="h5" component="h2">
							Add Person
						</Typography>
						<PersonForm updateParent={personsListUpdated}/>
					</div>
				</Grid>
			</Grid>
	  	</Box>
	);
}
