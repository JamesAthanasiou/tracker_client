import { useEffect, useState } from "react";
import Person from "../types/Person";
import { getFriends } from "../api";

type CurrentFriendsProps = {
    person_id: number;
}

export default function CurrentFriends({person_id}: CurrentFriendsProps) {
    const [friends, setFriends] = useState<Person[]>([]);

    useEffect(() => {
        let active = true;

        const fetchFriends = async () => {
            const data = await (getFriends(person_id)) as Person[];
            if (active) {
                setFriends(data);
            }
        }

        fetchFriends();
        return () => {
            active = false;
        };
    },[]);
    
    return (
        <div>
            {friends.map((e, key) => {
                return <li key={key} value={e.id}>{e.first_name}</li>;
            })}
        </div>
    )
}
