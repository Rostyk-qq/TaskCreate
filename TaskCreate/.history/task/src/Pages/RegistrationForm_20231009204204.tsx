import { useState } from "react"
import { TypedUseSelector } from "../Redux/TypeSelector/selector"
import { actionsCreators } from "../Redux/Reducers/ActionCreators"
import React from "react"
const RegistrationForm = () => {
    const {id, name, lastName, email, password, passwordSubmit} = TypedUseSelector(state => state.UserReducer);
    console.log(id, name, lastName, email, password, passwordSubmit);
    return (
        <form>
            <input value={name} onChange={e => actionsCreators.CreatorName(e.target.value)} className="input" name='name' placeholder='Name' />
            <input value={lastName} onChange={e => actionsCreators.CreatorLastName(e.target.value)} className="input" name='lastName' placeholder='LastName' />
            <input value={email} onChange={e => actionsCreators.CreatorName(e.target.value)} className="input" name='email' placeholder='Email' />
            <input value={name} onChange={e => actionsCreators.CreatorName(e.target.value)} className="input" name='password' placeholder='Password' />
            <input className="input" name="passwordSubmit" placeholder='PasswordSubmit' />
            <div>
                <button className="button" type='submit' >Register</button>
            </div>
        </form>
    )
}
export default RegistrationForm