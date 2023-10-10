import React, {FC} from 'react';
import { pageRenderCreator } from '../../Redux/Reducers/ActionCreators';
import { AppDispatch } from '../../Redux/store';
import 
import {useDispatch} from 'react-redux' 
import RenderPosts from './RenderUsers';

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
            <button onClick={exit} >Exit</button>
            <div className='posts__container'>
                <RenderPosts />
            </div>
        </div>
    )
}
export default Posts