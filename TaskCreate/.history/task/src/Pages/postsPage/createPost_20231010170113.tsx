import React, {FC} from 'react';
import { ArrayUsers } from '../../Redux/Reducers/Types';

interface CreatePostParams {
    array: ArrayUsers[]
}

const CreatePost:FC<CreatePostParams> = ({array}) => {
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