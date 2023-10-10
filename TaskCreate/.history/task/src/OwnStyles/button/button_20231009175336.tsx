import { FC } from "react";
import styles from './style.module.css'
const Button:FC = ({children, ...props}) => {
    return (
        <input {...props} className={styles.input} />
    )
}
export default Button