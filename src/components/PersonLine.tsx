import { useNavigate } from "@tanstack/react-router";
import Person from "../types/Person";

type PersonProps =  {
    person: Person,
}

export default function PersonLine(props: PersonProps) {

    const navigate = useNavigate()

    function handleClick(){  
        navigate({
            to: `/person/${props.person.id}`,
        });
    }

    return (
        <div className="person-line">
            <div>{props.person.first_name} </div>
            <button onClick={handleClick}>view</button>
        </div>
    );
}
