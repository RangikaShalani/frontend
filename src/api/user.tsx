import { requests } from "./client";
import {UserDataFeeld} from "../app/types/userType";

const User = {

    signUp: (userfeeld: UserDataFeeld) =>
        requests.post<UserDataFeeld>("api/app/signup", userfeeld),

}

export default User;