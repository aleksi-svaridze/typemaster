import { BtnPropsType } from "../types/Types"

export const BtnOrange = (props: BtnPropsType) => {
    return(
        <button className="btn btn-danger">{props.textContent}</button>
    )
}


export const BtnBlue = (props: BtnPropsType) => {
    return(
        <button className="btn btn-success">{props.textContent}</button>
    )
}