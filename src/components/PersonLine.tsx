import { useNavigate } from "@tanstack/react-router";
import Person from "../types/Person";

type PersonProps =  {
    person: Person,
}

export default function PersonLine({person}: PersonProps) {

    const navigate = useNavigate()

    async function handleClick(){  
        
        navigate({
            to: `/person/${person.id}`,
        });
    }

    return (
        <div className="person-line">
            <div>{person.first_name} </div>
            <button onClick={handleClick}>view</button>
        </div>
    );
}
