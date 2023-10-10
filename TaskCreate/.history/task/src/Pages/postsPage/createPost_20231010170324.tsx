import React, {FC} from 'react';

interface CreatePostParams {
    id: number 
    name: string
    email={user.email}
}

const CreatePost:FC<CreatePostParams> = ({}) => {
    return (    
        <div className='post'>
            
        </div>
    )
}
export default CreatePost;