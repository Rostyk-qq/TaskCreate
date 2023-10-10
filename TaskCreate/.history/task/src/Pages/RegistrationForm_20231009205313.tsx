import { useState } from "react"
import { TypedUseSelector } from "../Redux/TypeSelector/selector"
import { actionsCreators } from "../Redux/Reducers/ActionCreators"
import React from "react"
const RegistrationForm = () => {
    const {id, name, lastName, email, password, passwordSubmit} = TypedUseSelector(state => state.UserReducer);
    const [params, setParams] = useState({name: '', lastName: '', email: '', password: '', passwordSubmit: ''})

    const StoreParams = () => {
        actionsCreators.CreatorName()
    }
    return (
        <form>
            <input value={params.name} onChange={e => setParams({...params, name: e.target.value})} className="input" name='name' placeholder='Name' />
            <input value={params.lastName} onChange={e => setParams({...params, lastName: e.target.value})} className="input" name='lastName' placeholder='LastName' />
            <input value={params.email} onChange={e => setParams({...params, email: e.target.value})} className="input" name='email' placeholder='Email' />
            <input value={params.password} onChange={e => setParams({...params, password: e.target.value})} className="input" name='password' placeholder='Password' />
            <input value={params.passwordSubmit} onChange={e => setParams({...params, passwordSubmit: e.target.value})} className="input" name="passwordSubmit" placeholder='PasswordSubmit' />
            <div>
                <button onClick={StoreParams} className="button" type='submit' >Register</button>
            </div>
        </form>
    )
}
export default RegistrationForm