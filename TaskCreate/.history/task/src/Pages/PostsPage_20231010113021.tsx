import React, {FC} from 'react';
import { pageRenderCreator } from '../Redux/Reducers/ActionCreators';
import { AppDispatch } from '../Redux/store';
import useDispatch 
const Posts:FC = () => {
    const exit = (e: any) => {
        e.preventDefault();

        
    }
    return (
        <div>
            <button onClick={exit} >Exit</button>
        </div>
    )
}
export default Posts