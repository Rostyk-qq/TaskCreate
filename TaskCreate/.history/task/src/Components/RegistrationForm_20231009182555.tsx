
const RegistrationForm = () => {
    return (
        <form>
            <input className="input" name='name' placeholder='Name' />
            <input className="input" name='name' placeholder='LastName' />
            <input className="input" placeholder='Email' />
            <input className="input" placeholder='Password' />
            <input className="input" placeholder='PasswordSubmit' />
            <button className="button" type='submit' >Register</button>
        </form>
    )
}
export default RegistrationForm