import React, {FC} from 'react';

interface CreatePostParams {
    id: number 
    name={user.name} 
    email={user.email}
}

const CreatePost:FC<CreatePostParams> = ({}) => {
    return (    
        <div className='post'>
            
        </div>
    )
}
export default CreatePost;