import { useEffect, useState } from "react";
import Person from "../types/Person";
import { createFriendship, getAllPersons } from "../api";
import { Friendship } from "../types/Friendship";

export default function FormFriendship() {
    const [people, setPeople] = useState<Person[]>([]);
    const [friends, setFriends] = useState<Friendship>({
        person_1_id: null,
        person_2_id: null,
    });

    let firstFriendId: number | undefined;

    useEffect(() => {
        async function startFetching(): Promise<void> {
            const result = (await getAllPersons()) as Person[];
            setPeople(result);
        }

        startFetching();
      }, [people]);

    const handleChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        // Remove from 
        setFriends({...friends,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(friends)
    }

    async function onSubmit(data: Friendship) {
        // TODO set error in form if names are the same
        const result = (await createFriendship(data))
        console.log(result);
    }

    return (
        // TODO change in the future. We would want an logged in user to pick from an autocomplete dropdown.
        <form onSubmit={handleSubmit}>
            <select
                name="person_1_id"
                value={firstFriendId}
                onChange={handleChange}>
                    {/* TODO bug: appears to have selected someone on load, but actually hasn't. Fix. */}
                    {people.map((e, key) => {
                        return <option key={key} value={e.id}>{e.first_name}</option>;
                    })}
            </select>

            <select
                name="person_2_id"
                value={firstFriendId}
                onChange={handleChange}>
                    {/* TODO bug: appears to have selected someone on load, but actually hasn't. Fix. */}
                    {people.map((e, key) => {
                        return <option key={key} value={e.id}>{e.first_name}</option>;
                    })}
            </select>

            <button type="submit">Submit</button>
        </form>
    );
}