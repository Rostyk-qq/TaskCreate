import { FC } from "react";
import styles from './button.module.css'

interface ButtonProps {
    chlidren: React.R
}

const Button:FC = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button} >
            {children}
        </button>
    )
}
export default Button