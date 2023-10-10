
const RegistrationForm = () => {
    return (
        <form>
            <input className="input" placeholder='Name' />
            <input className="input" placeholder='LastName' />
            <input className="input" placeholder='Email' />
            <input className="input" placeholder='Password' />
            <input className="input" placeholder='PasswordSubmit' />
            <button type='submit' >Register</button>
        </form>
    )
}
export default RegistrationForm