import React, {FC} from 'react';
import { pageRenderCreator } from '../../Redux/Reducers/ActionCreators';
import { AppDispatch } from '../../Redux/store';
import {useDispatch} from 'react-redux' 
const Posts:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const exit = (e: any) => {
        e.preventDefault();
        localStorage.setItem('registredError', JSON.stringify(false))
        localStorage.removeItem('registred')
        dispatch(pageRenderCreator.CreatorRender(false))
    }
    return (
        <div className='users__posts'>
            <div className='posts__container'></div>
            <button onClick={exit} >Exit</button>
        </div>
    )
}
export default Posts