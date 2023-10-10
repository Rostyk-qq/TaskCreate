import React, {FC} from 'react';

interface CreatePostParams {
    id: number 
    name: string
    email: string
}

const CreatePost:FC<CreatePostParams> = ({}) => {
    return (    
        <div className='post'>
            
        </div>
    )
}
export default CreatePost;