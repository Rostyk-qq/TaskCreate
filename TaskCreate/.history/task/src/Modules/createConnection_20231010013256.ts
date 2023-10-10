import axios from "axios";

interface User {
    name: string,
    lastName: string,
    email: string,
    password: string,
    passwordSubmit: string
}

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
        if(data.data === 'You not fill all path!'){
            return 'You not fill all path!'
        }
        else if(data.data === 'Passwords do not match!'){
            return 'Passwords do not match!'
        }
        else if(data.data === 'Email is not valid!'){
            return 'Email is not valid!'
        }
        else if(data.data === 'This user was exists!'){
            return 'Email is not valid!'
        }
    })
}