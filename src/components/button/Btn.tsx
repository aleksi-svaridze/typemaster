import { BtnPropsType } from "../../types/Types"

export const Btn = (props: BtnPropsType) => {
    return(
        <button 
            className={`btn text-uppercase fw-bolder ${props.btnColor} ${props.btnBg}`}>{props.textContent}</button>
    )
}