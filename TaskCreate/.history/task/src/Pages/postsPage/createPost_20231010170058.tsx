import React, {FC} from 'react';
import { ArrayUsers } from '../../Redux/Reducers/Types';

interface RenderPostsParams {
    array: ArrayUsers[]
}

const Cre:FC<RenderPostsParams> = ({array}) => {
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