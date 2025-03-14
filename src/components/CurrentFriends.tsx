import { useEffect, useState } from "react";
import Person from "../types/Person";
import { getFriends } from "../api";

type CurrentFriendsProps = {
    person_id: number;
}

export default function CurrentFriends({person_id}: CurrentFriendsProps) {
    const [friends, setFriends] = useState<Person[]>([]);

    useEffect(() => {
        (async function getF(): Promise<void> {
            const result = (await getFriends(person_id)) as Person[];
            setFriends(result);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return (
        <div>
            {friends.map((e, key) => {
                return <li key={key} value={e.id}>{e.first_name}</li>;
            })}
        </div>
    )
}
