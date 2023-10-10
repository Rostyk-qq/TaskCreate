import React, { FC } from "react";
import styles from './button.module.css'
const Button:FC = ({children: React.ReactNode, ...props}) => {
    return (
        <button {...props} className={styles.button} >
            {children}
        </button>
    )
}
export default Button