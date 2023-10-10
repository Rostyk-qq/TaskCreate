import { User } from "./Types";

const user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    passwordSubmit: ''
};

export const UserReducer = (state: User)