import React, {FC} from 'react';
import RegistrationForm from './RegistrationForm';

const Registration:FC = () => {
    return (
        <div className="area__box">
            <h1>Registration</h1>
            <form>
            <input className="input" name='name' placeholder='Name' />
            <input className="input" name='lastName' placeholder='LastName' />
            <input className="input" name='email' placeholder='Email' />
            <input className="input" name='password' placeholder='Password' />
            <input className="input" name="passwordSubmit" placeholder='PasswordSubmit' />
            <button className="button" type='submit' >Register</button>
        </form>
        </div>
    )
}
export default Registration