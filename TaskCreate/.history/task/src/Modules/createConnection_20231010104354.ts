import axios from "axios";

interface User {
    name: string,
    lastName: string,
    email: string,
    password: string,
    passwordSubmit: string
}

export const CreateConnection = async (params: User) => {
    const url = 'http://localhost/validate/validate.php';

    const form = new FormData();
    form.append('name', params.name);
    form.append('lastName', params.lastName);
    form.append('email', params.email);
    form.append('password', params.password);
    form.append('passwordSubmit', params.passwordSubmit);

    try {
        const response = await axios.post(url, form);
        const data = response.data;

        if (data === 'You not fill all path!') {
            return 'You not fill all path!';
        } else if (data === 'Passwords do not match!') {
            return 'Passwords do not match!';
        } else if (data === 'Email is not valid!') {
            return 'Email is not valid!';
        } else if (data === 'This user was exists!') {
            return 'This user was exists!';
        } else if(){
            console.log(data.data);
            
        }
    } catch (error) {
        console.error('Error:', error);
        return 'An error occurred!';
    }
}