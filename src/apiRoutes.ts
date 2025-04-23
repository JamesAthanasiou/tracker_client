import { CurrentUser } from "./types/CurrentUser";
import { Friendship } from "./types/Friendship";
import { LoginFormData } from "./types/LoginFormData";
import Person from "./types/Person";
import { UserLogin } from "./types/UserLogin";

export async function getAllPersons(): Promise<unknown> {
    return apiCall('GET', 'person/show-all');
}

export async function getPerson(person_id: string): Promise<unknown> {
    return apiCall('GET', `person/${person_id}`);
}

export async function createPerson(data: Person): Promise<unknown> {
    return apiCall('POST', 'person/create', data);
}

export async function deletePerson(data: Person): Promise<unknown> {
    return apiCall('POST', 'person/delete', data);
}

export async function createFriendship(data: Friendship): Promise<unknown> {
    return apiCall('POST', 'friendship/create', data);
}

// TODO, is typing it this specifically worth the headache?
export async function login(data: LoginFormData): Promise<{user: CurrentUser, token: string}> {
    return apiCall<UserLogin, {user: CurrentUser, token: string}>('POST', 'login', data);
}

export async function signup(data: LoginFormData): Promise<{user: CurrentUser, token: string}> {
    return apiCall<UserLogin, {user: CurrentUser, token: string, person: Person}>('POST', 'user/create', data);
}

export async function getFriends(person_id: number): Promise<unknown> {
    return apiCall('GET', `friendship/get-friends/?person_id=${person_id}`);
}

// TODO expand when new routes are added.
type Method = 'GET' | 'POST';

// TODO something about the error handling and types feels wrong.
async function apiCall<T, R>(method: Method, slug: string, data?: T): Promise<R> {
    const url = `${import.meta.env.VITE_API_URL}/${slug}`;

    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: getHeaders(),
        });

        if (!response.ok) {
            // TODO error handling
            throw new Error(`Response status: ${response.status}`);
        }
        
        return await response.json();

    } catch (error) {
        console.error({message: getErrorMessage(error)});
        throw error
    }
}



// TODO move to error handling
function getErrorMessage(error: unknown): string {
	if (error instanceof Error) return error.message
	return String(error)
}

// TODO: do we want a global header object or is recreating on every API call ok?
export function getHeaders(): Headers {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const stringToken = localStorage.getItem('token');

    if (stringToken != null && stringToken != undefined && stringToken != 'undefined') {
        headers.append("Authorization", `Bearer ${JSON.parse(stringToken)}`);
    }

    return headers;
}
