
const RegistrationForm = () => {
    return (
        <form>
            <input className="input" name='name' placeholder='Name' />
            <input className="input" name='lastName' placeholder='LastName' />
            <input className="input" name='email' placeholder='Email' />
            <input className="input" name='password' placeholder='Password' />
            <input className="input" placeholder='PasswordSubmit' />
            <button className="button" type='submit' >Register</button>
        </form>
    )
}
export default RegistrationForm