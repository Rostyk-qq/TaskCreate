import React, {FC} from 'react';
import { pageRenderCreator } from '../../Redux/Reducers/ActionCreators';
import { AppDispatch } from '../../Redux/store';
import { TypedUseSelector } from '../../Redux/TypeSelector/selector';
import {useDispatch} from 'react-redux' 
import RenderPosts from './RenderUsers';

const Posts:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {usersArray} = TypedUseSelector(state => state.ArrayUsersReducer)

    const exit = (e: any) => {
        e.preventDefault();
        localStorage.setItem('registredError', JSON.stringify(false))
        localStorage.removeItem('registred')
        dispatch(pageRenderCreator.CreatorRender(false))
    }
    console.log(usersArray.length)
    return (
        <div className='users__posts'>
            <button onClick={exit} >Exit</button>
            <div className='posts__container'>
                {usersArray && usersArray.map(user => (
                    <div>{user.email}</div>
                ))}
            </div>
        </div>
    )
}
export default Posts