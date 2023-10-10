import React, {FC} from 'react';

interface PostsProps {
    post: string
}

const Posts:FC<PostsProps> = () => {
    return (
        <h1>Posts</h1>
    )
}
export default Posts