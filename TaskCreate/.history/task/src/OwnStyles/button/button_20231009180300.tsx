import { FC } from "react";
import styles from './button.module.css'

interface ButtonProps {
    
}

const Button:FC = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button} >
            {children}
        </button>
    )
}
export default Button