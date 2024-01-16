import { BtnPropsType } from "../../types/Types"
import styles from './btn.module.css';

export const Btn = (props: BtnPropsType) => {
    return(
        <button className={`${styles.btn} text-uppercase fw-bolder ${styles.btn__blue}`}>{props.textContent}</button>
    )
}