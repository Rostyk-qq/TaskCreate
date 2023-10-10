import { User } from "../Redux/Reducers/Types"

export const CreateConnection = (params: User) => {
    const url = '';

    const form = new FormData();
    form.append('name', params.name);
    form.append('lastName', params.lastName);
    form.append('email', params.email);
    form.append('password', params.password);
    form.append('passwordSubmit', params.name);
}