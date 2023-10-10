import React, {FC} from 'react';
import RegistrationForm from './RegistrationForm';

const Registration = () => {
    return (
        <div className='registration__area' >
            <div className="area__box">
                <h1>Registration</h1>
                <RegistrationForm />
            </div>
        </div>
    )
}
export default Registration