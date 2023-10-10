import { FC } from "react";
import styles from './bu.module.css'
const Button:FC = ({children, ...props}) => {
    return (
        <button {...props} className={} >
            {children}
        </button>
    )
}
export default Button