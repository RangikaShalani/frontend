import { requests } from "./client";
import {UserDataFeeld} from "../app/types/userType";
import { User} from "../app/store/user";

const Users = {

    signUp: (userfeeld: UserDataFeeld) =>
        requests.post<User>("api/app/create-user", userfeeld),

}

export default Users;