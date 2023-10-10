import React from "react"
const RegistrationForm = () => {
    return (
        <form>
            <input className="input" name='name' placeholder='Name' />
            <input className="input" name='lastName' placeholder='LastName' />
            <input className="input" name='email' placeholder='Email' />
            <input className="input" name='password' placeholder='Password' />
            <input className="input" name="passwordSubmit" placeholder='PasswordSubmit' />
            <div>
            <button className="button" type='submit' >Register</button>
            </div>
        </form>
    )
}
export default RegistrationForm