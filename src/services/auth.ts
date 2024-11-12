import { login as apiLogin } from "../api";
import { CurrentUser } from "../types/CurrentUser";
import { UserLogin } from "../types/UserLogin";

export async function login(data: UserLogin, setUserLogin: (user?: CurrentUser) => Promise<void>) {
    // TOOD add try catch

    const res = await apiLogin(data);

    const currentUser = res?.user;
    setUserLogin(currentUser);

    // TODO figure out something more secure than setting token in localStorage. This really, really not good.
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('token', JSON.stringify(res?.token));
}

// export function logout() {
//     // setUserLogin(undefined);
//     localStorage.clear();
//     authData.token = null;
//     headers.delete("Authorization");
// }

// export function setUserData(token: string) {
//     authData.token = token;
//     headers.append("Authorization", `Bearer ${authData.token}`);
// }


