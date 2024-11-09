import { login as apiLogin } from "../api";
import { CurrentUser } from "../types/CurrentUser";
import { UserLogin } from "../types/UserLogin";

// TODO implement authentication token.
// interface IAuthData {
//     token: string | null,
//     currentUser: CurrentUser | null
// }

// // TODO: find something cleaner than managing current user with just a global variable.
// export const authData: IAuthData = {
//     token: null,
//     currentUser: null
// }

export async function login(data: UserLogin, setUserLogin: (user: CurrentUser) => Promise<void>) {
    const res = await apiLogin(data);
    console.log(res);

    const currentUser = (res!.user);
    setUserLogin(currentUser)

    // setUserData(res!.token);
    // console.log(authData.token);
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


