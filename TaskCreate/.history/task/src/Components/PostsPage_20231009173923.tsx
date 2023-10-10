import React, {FC} from 'react';

interface PostsProps {
    post: string
}

const Posts:FC<PostsProps> = (props) => {
    return (
        <h1>Posts</h1>
    )
}
export default Posts