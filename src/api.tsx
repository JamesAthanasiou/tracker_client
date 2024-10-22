// TODO rename file, clean up.
import Person from "./types/Person";

export async function getAllPersons(): Promise<unknown> {
    const url = `${import.meta.env.VITE_API_URL}/person/show-all`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error({message: getErrorMessage(error)});
    }
}

export async function createPerson(data: Person): Promise<unknown> {
    const url = `${import.meta.env.VITE_API_URL}/person/create`;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: myHeaders,
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        return await response.json();

    } catch (error) {
        console.error({message: getErrorMessage(error)});
    }
}

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) return error.message
	return String(error)
}
