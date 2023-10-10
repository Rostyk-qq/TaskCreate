import { FC } from "react";
import styles from './style.module.css'
const Button:FC = ({children: string, ...props}) => {
    return (
        <button {...props} className="" >
            {children}
        </button>
    )
}
export default Button