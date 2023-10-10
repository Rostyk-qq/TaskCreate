import React, {FC} from 'react';
import { ArrayUsers } from '../../Redux/Reducers/Types';

interface CreatePostParams {
}

const CreatePost:FC<CreatePostParams> = ({}) => {
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