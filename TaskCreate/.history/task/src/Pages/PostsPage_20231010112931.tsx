import React, {FC} from 'react';
import 
const Posts:FC = () => {
    const exit = (e: any) => {
        e.preventDefault();

        
    }
    return (
        <div>
            <button onClick={exit} >Exit</button>
        </div>
    )
}
export default Posts