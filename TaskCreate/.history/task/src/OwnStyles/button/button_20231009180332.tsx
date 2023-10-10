import React, { FC } from "react";
import styles from './button.module.css'

interface ButtonProps {
    chlidren: React.ReactNode,
    props: an
}

const Button:FC = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button} >
            {children}
        </button>
    )
}
export default Button