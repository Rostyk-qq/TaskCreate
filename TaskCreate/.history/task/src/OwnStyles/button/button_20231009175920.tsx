import { FC } from "react";
import styles from './button.module.css'
const Button:FC = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button} >
            {children}
        </button>
    )
}
export default Button