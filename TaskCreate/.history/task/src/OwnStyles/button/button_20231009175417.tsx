import { FC } from "react";
import styles from './style.module.css'
const Button:FC = ({children, ...props}) => {
    return (
        <button {props} >
            {children}
        </button>
    )
}
export default Button