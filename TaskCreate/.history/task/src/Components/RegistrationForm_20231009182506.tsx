
const RegistrationForm = () => {
    return (
        <form>
            <input className="input" placeholder='Name' />
            <input className="input" placeholder='LastName' />
            <input placeholder='Email' />
            <input placeholder='Password' />
            <input placeholder='PasswordSubmit' />
            <button type='submit' >Register</button>
        </form>
    )
}
export default RegistrationForm