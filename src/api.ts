// TODO rename file, clean up.
import { Friendship } from "./types/Friendship";
import Person from "./types/Person";

export async function getAllPersons(): Promise<unknown> {
    return apiCall('GET', 'person/show-all');
}

export async function createPerson(data: Person): Promise<unknown> {
    return apiCall('POST', 'person/create', data);
}

export async function createFriendship(data: Friendship): Promise<unknown> {
    return apiCall('POST', 'friendship/create', data);
}

type Method = 'GET' | 'POST';

async function apiCall<T>(method: Method, slug: string, data?: T): Promise<unknown> {
    const url = `${import.meta.env.VITE_API_URL}/${slug}`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: headers,
        });

        if (!response.ok) {
            // TODO error handling
            throw new Error(`Response status: ${response.status}`);
        }
        
        return await response.json();

    } catch (error) {
        console.error({message: getErrorMessage(error)});
    }
}

// TODO move to error handling
function getErrorMessage(error: unknown): string {
	if (error instanceof Error) return error.message
	return String(error)
}
