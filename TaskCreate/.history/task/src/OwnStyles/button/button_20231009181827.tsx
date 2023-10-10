import React, { FC } from "react";
import styles from './button.module.css'

interface ButtonProps {
    children: React.ReactNode,
}

const Button:FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button ...props className={styles.button} >
            {children}
        </button>
    )
}
export default Button