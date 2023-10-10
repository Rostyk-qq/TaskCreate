import React, {FC} from 'react';
import { ArrayUsers } from '../../Redux/Reducers/Types';

interface RenderPostsParams {
    array: ArrayUsers[]
}

const RenderPosts:FC<RenderPostsParams> = ({array}) => {
    return (    
        <div className='container__post'>
            
        </div>
    )
}
export default RenderPosts;