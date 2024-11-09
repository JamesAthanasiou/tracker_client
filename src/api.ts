// TODO rename file, clean up.
import { CurrentUser } from "./types/CurrentUser";
import { Friendship } from "./types/Friendship";
import Person from "./types/Person";
import { UserLogin } from "./types/UserLogin";

export async function getAllPersons(): Promise<unknown> {
    return apiCall('GET', 'person/show-all');
}

export async function createPerson(data: Person): Promise<unknown> {
    return apiCall('POST', 'person/create', data);
}

export async function createFriendship(data: Friendship): Promise<unknown> {
    return apiCall('POST', 'friendship/create', data);
}

// TODO, is typing it this specifically worth the headache?
export async function login(data: UserLogin): Promise<{user: CurrentUser, token: string} | undefined> {
    return apiCall<UserLogin, {user: CurrentUser, token: string}>('POST', 'login', data);
}

// TODO figure out what to do with headers that isn't newing up a header each time.
const headers = new Headers({"Content-Type": "application/json"});

// TODO expand when new routes are added.
type Method = 'GET' | 'POST';

async function apiCall<T, R>(method: Method, slug: string, data?: T): Promise<R | undefined> {
    const url = `${import.meta.env.VITE_API_URL}/${slug}`;

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
