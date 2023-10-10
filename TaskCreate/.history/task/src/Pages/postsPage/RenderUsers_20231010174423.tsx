import React, {FC} from 'react';
import { ArrayUsers } from '../../Redux/Reducers/Types';
import CreatePost from './createPost';

interface RenderPostsParams {
    array: ArrayUsers[]
}

const RenderPosts:FC<RenderPostsParams> = ({array}) => {
    return (    
            {
                array.map(user => (
                    <CreatePost key={user.email} id={user.id} name={user.name} email={user.email} />
                ))
            }
           
    )
}
export default RenderPosts;