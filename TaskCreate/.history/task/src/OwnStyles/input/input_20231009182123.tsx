import { FC } from "react";
import styles from './input.module.css'
const Input:FC = (...props) => {
    return (
        <input {props} className={styles.input} />
    )
}
export default Input