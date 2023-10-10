import React, {FC} from 'react';
import RegistrationForm from './RegistrationForm';

const Registration:FC = () => {
    return (
        <div className='registration__area' >
            <div className="area__box">
                <h1></h1>
                <RegistrationForm />
            </div>
        </div>
    )
}
export default Registration