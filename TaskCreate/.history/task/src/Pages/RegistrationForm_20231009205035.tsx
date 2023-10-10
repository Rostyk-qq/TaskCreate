import { useState } from "react"
import { TypedUseSelector } from "../Redux/TypeSelector/selector"
import { actionsCreators } from "../Redux/Reducers/ActionCreators"
import React from "react"
const RegistrationForm = () => {
    const {id, name, lastName, email, password, passwordSubmit} = TypedUseSelector(state => state.UserReducer);
    const [params, setParams] = useState({name: '', lastName: '', email: '', password: '', passwordSubmit: ''})
    return (
        <form>
            <input value={params.name} onChange={e => setParams({...params, name: e.target.value})} className="input" name='name' placeholder='Name' />
            <input value={params.lastName} onChange={e => setParams({...params, lastName: e.target.value})} className="input" name='lastName' placeholder='LastName' />
            <input value={params.email} onChange={e => setParams({...params, email: e.target.value})} className="input" name='email' placeholder='Email' />
            <input value={params.name} onChange={e => setParams({...params, name: e.target.value})} className="input" name='password' placeholder='Password' />
            <input value={passwordSubmit} onChange={e => actionsCreators.CreatorSubmitPassword(e.target.value)} className="input" name="passwordSubmit" placeholder='PasswordSubmit' />
            <div>
                <button onClick={e => console.log(id, name, lastName, email, password, passwordSubmit)} className="button" type='submit' >Register</button>
            </div>
        </form>
    )
}
export default RegistrationForm