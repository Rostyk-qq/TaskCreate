import React, {FC} from 'react';
import { ArrayUsers } from '../../Redux/Reducers/Types';
import Create

interface RenderPostsParams {
    array: ArrayUsers[]
}

const RenderPosts:FC<RenderPostsParams> = ({array}) => {
    return (    
        <div className='container__post'>
            {
                array.map(user => (

                ))
            }
        </div>
    )
}
export default RenderPosts;