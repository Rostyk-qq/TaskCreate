import React, {FC} from 'react';
import { pageRenderCreator } from '../Redux/Reducers/ActionCreators';
import { AppDispatch } from '../Redux/store';
import {useDispatch} from 'react-redux' 
const Posts:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const exit = (e: any) => {
        e.preventDefault();
        dispatch
        
    }
    return (
        <div>
            <button onClick={exit} >Exit</button>
        </div>
    )
}
export default Posts