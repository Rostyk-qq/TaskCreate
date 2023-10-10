import React, {FC} from 'react';

interface CreatePostParams {
    id: number 
    name: string
    email: string
}

const CreatePost:FC<CreatePostParams> = ({id, email, name}) => {
    return (    
        <div className='post'>
            <div className="post__left-side">

            </div>
            
        </div>
    )
}
export default CreatePost;