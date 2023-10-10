import { useState } from "react"
import { actionsCreators } from "../Redux/Reducers/ActionCreators"
import { AppDispatch } from "../Redux/store"
import {useDispatch} from 'react-redux'
import { pageRenderCreator } from "../Redux/Reducers/ActionCreators"
import { CreateConnection } from "../Modules/createConnection"

const RegistrationForm = () => {
    const [params, setParams] = useState({name: '', lastName: '', email: '', password: '', passwordSubmit: ''})
    const [message, setMessage] = useState<string>()
    const dispatch = useDispatch<AppDispatch>()

    const modal = document.querySelector('.area__box')

    const StoreParams = async (e: any) => {
        e.preventDefault()
        dispatch(actionsCreators.CreatorName(params.name));
        dispatch(actionsCreators.CreatorLastName(params.lastName));
        dispatch(actionsCreators.CreatorLastName(params.lastName));
        dispatch(actionsCreators.CreatorEmail(params.email));
        dispatch(actionsCreators.CreatorPassword(params.password));
        dispatch(actionsCreators.CreatorSubmitPassword(params.passwordSubmit));

        const message = await CreateConnection(params)        
        if(message === 'You not fill all path!'){
            setMessage(message)
        }
        else if(message === 'Passwords do not match!'){
            setMessage(message)
        }
        else if(message === 'Email is not valid!'){
            setMessage(message)
        }
        else if(message === 'This user was exists!'){
            setMessage(message)
        }
        else{
            setParams({name: '', lastName: '', email: '', password: '', passwordSubmit: ''})
            if(message){
                setMessage('')
            }
            alert('All went good!');
            setTimeout(() => {
                dispatch(pageRenderCreator.CreatorRender(true))
            }, 1000)
        }
    }

    return (
        <form>
            {message && <h1 style={{textAlign: "center", color: 'red'}} >{message}</h1>}
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