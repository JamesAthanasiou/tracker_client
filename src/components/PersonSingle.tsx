import { useNavigate } from "@tanstack/react-router";
import Person from "../types/Person"
import CurrentFriends from "./CurrentFriends";
import FormFriendship from "./FriendshipForm";
import { deletePerson } from "../apiRoutes";

type PersonSingleProps = {
    person: Person
}



export default function PersonSingle({person}: PersonSingleProps){
    const navigate = useNavigate()

    async function handleClick(){

        await deletePerson(person);

        navigate({
            to: `/person`,
        });
    }


    // TODO, when a new friend is added it should rerender current friends.
    return (
        <div className="container">
            <div className="section-header">Basic Info</div>
            <div>Person Info: {person.id}, {person.first_name} {person.last_name}</div>
            <div className="section-header">Friends</div>
            {/* TODO redo type to use partials to avoid type coercion */}
            <CurrentFriends person_id={person.id as number} />
            <div className="section-header">Add friend</div>
            <FormFriendship person={person}/>
            <div className="section-header">Delete Person <button onClick={handleClick}>Delete</button></div>
        </div>
    )
}
