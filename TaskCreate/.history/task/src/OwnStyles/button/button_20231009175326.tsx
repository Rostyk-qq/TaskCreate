import { FC } from "react";
import styles from './style.module.css'
const Button:FC = ({...props, children}) => {
    return (
        <input {...props} className={styles.input} />
    )
}
export default Button