import React, {FC} from 'react';
import { pageRenderCreator } from '../Redux/Reducers/ActionCreators';
import { AppDispatch } from '../Redux/store';
import {useDispatch} from 'react-redux' 
const Posts:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const exit = (e: any) => {
        e.preventDefault();
        localStorage.setItem('registredError', JSON.stringify(false))
        dispatch(pageRenderCreator.CreatorRender())
        
    }
    return (
        <div>
            <button onClick={exit} >Exit</button>
        </div>
    )
}
export default Posts