import axios from "axios";

interface User {

}

export const CreateConnection = (params) => {
    const url = 'http://localhost/validate/validate.php';

    console.log(params);
    
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