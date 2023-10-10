import { FC } from "react";
import styles from './style.module.css'
const Button:FC = ({children: s, ...props}) => {
    return (
        <button {...props} className="" >
            {children}
        </button>
    )
}
export default Button