import { useState } from "react"
import { actionsCreators } from "../Redux/Reducers/ActionCreators"
import { AppDispatch } from "../Redux/store"
import {useDispatch} from 'react-redux'
import { TypedUseSelector } from "../Redux/TypeSelector/selector"
import { CreateConnection } from "../Modules/createConnection"

const RegistrationForm = () => {
    const [params, setParams] = useState({name: '', lastName: '', email: '', password: '', passwordSubmit: ''})
    const [message, setMessage] = useState<string>()
    const dispatch = useDispatch<AppDispatch>()

    const StoreParams = (e: any) => {
        e.preventDefault()
        dispatch(actionsCreators.CreatorName(params.name));
        dispatch(actionsCreators.CreatorLastName(params.lastName));
        dispatch(actionsCreators.CreatorLastName(params.lastName));
        dispatch(actionsCreators.CreatorEmail(params.email));
        dispatch(actionsCreators.CreatorPassword(params.password));
        dispatch(actionsCreators.CreatorSubmitPassword(params.passwordSubmit));


        const message = CreateConnection(params);
        if(data.data === 'You not fill all path!'){
            return 'You not fill all path!'
        }
        else if(data.data === 'Passwords do not match!'){
            return 'Passwords do not match!'
        }
        else if(data.data === 'Email is not valid!'){
            return 'Email is not valid!'
        }
        else if(data.data === 'This user was exists!'){
            return 'This user was exists!'
        }
    }

    return (
        <form>
            <input value={params.name} onChange={e => setParams({...params, name: e.target.value})} className="input"  placeholder='Name' />
            <input value={params.lastName} onChange={e => setParams({...params, lastName: e.target.value})} className="input" placeholder='LastName' />
            <input value={params.email} onChange={e => setParams({...params, email: e.target.value})} className="input" placeholder='Email' />
            <input value={params.password} onChange={e => setParams({...params, password: e.target.value})} className="input" placeholder='Password' />
            <input value={params.passwordSubmit} onChange={e => setParams({...params, passwordSubmit: e.target.value})} className="input" placeholder='PasswordSubmit' />
            <div>
                <button onClick={StoreParams} className="button" type='submit' >Register</button>
            </div>
        </form>
    )
}
export default RegistrationForm