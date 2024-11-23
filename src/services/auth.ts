import { login as apiLogin } from "../api";
import { CurrentUser } from "../types/CurrentUser";
import { UserLogin } from "../types/UserLogin";

interface LoginData {
    user: CurrentUser;
    token: string;
}

export async function login(data: UserLogin, signIn: (user: CurrentUser) => Promise<void>) {
    let res: LoginData;

    try {
        res = await apiLogin(data);
    } catch {
        throw new Error('Unable to login');
    }

    // TODO refactor? Don't like how there is authenticated (has token) and CurrentUser context (has user set in context).
    // Want to move setting context into one spot. Solution is likely state management.
    // Potentially for now this is fine though. If the login/logout functions force a function to update the UserContext we should be ok.
    const currentUser = res.user;
    signIn(currentUser);

    // TODO figure out something more secure than setting token in localStorage. This really, really not good.
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('token', JSON.stringify(res?.token));
}

export function logout(signOut: () => Promise<void>) {
    signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

export function isAuthenticated(): boolean {
    // TODO do we need a better way of doing this?
    return localStorage.getItem('user') !== null;
}

