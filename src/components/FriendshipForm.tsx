import { useEffect, useState } from "react";
import Person from "../types/Person";
import { createFriendship, getAllPersons } from "../api";
import { Friendship } from "../types/Friendship";

type FriendFormProps = {
    person: Person
}

// JTODO change this to be a form between two general people. Friends can be friends.
export default function FormFriendship({person}: FriendFormProps) {
    const [people, setPeople] = useState<Person[]>([]);
    const [friends, setFriends] = useState<Friendship>({
        person_1_id: null,
        person_2_id: null,
    });
    const [formError, setFormError] = useState<string>('');

    useEffect(() => {
        (async function startFetching(): Promise<void> {
            const result = (await getAllPersons()) as Person[];
            setPeople(result);
            setFriends({...friends, person_1_id: person.id as number});
            
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setFriends({...friends,[event.target.name] : event.target.value});

        if (checkFormValid()) {
            setFormError('');
        }
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO, handle case where user is already a friend, or let the api take care of that?
        // TODO make API return error code and not crash when dealing with exist friendship.
        if (!checkFormValid()) {
            if (friends.person_2_id === undefined ) {
                setFormError('Person has not been selected');
            } else {
                setFormError('Person cannot be friends with themselves');
            }
            return;
        }

        onSubmit(friends);
    }

    function checkFormValid(): boolean {
        return (friends.person_2_id !== undefined && friends.person_1_id != friends.person_2_id);
    }

    async function onSubmit(data: Friendship) {
        await createFriendship(data)

        // TODO. Use a context to the friends list on the friend single component after creating friendship.
    }

    return (
        
        <form onSubmit={handleSubmit}>
            { !checkFormValid() ? (
                <div>
                    <p>{formError}</p>
                </div>
            ) : (
                <span></span>
            )}
            <select
                name="person_2_id"
                onChange={handleChange}>
                    <option key={null} value={undefined}>Please select a person</option>
                    {people.map((e, key) => {
                        return <option key={key} value={e.id}>{e.first_name}</option>;
                    })}
            </select>

            <button type="submit">Add friend</button>
        </form>
    );
}