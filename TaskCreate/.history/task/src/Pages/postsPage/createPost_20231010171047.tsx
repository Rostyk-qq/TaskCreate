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
                <h1>User&ensp;{id}</h1>
            </div>
            <div className="post__right-side">
                <h3>name:&ensp;{email}</h3>
                <h3>email:&ensp;{email}</h3>    
            </div>
        </div>
    )
}
export default CreatePost;