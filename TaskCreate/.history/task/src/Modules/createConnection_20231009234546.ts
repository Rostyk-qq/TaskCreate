import { User } from "../Redux/Reducers/Types"
import axios from "axios";

export const CreateConnection = (params: User) => {
    const url = 'http://localhost/validate/validate.php';

    const form = new FormData();
    form.append('name', params.name);
    form.append('lastName', params.lastName);
    form.append('email', params.email);
    form.append('password', params.password);
    form.append('passwordSubmit', params.passwordSubmit);

    axios.post(url, form)
    .then(data => {
        console.log(data);
    })
}