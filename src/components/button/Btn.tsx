import { BtnPropsType } from "../../types/Types"

export const Btn = (props: BtnPropsType) => {
    return(
        <button 
            className='btn text-uppercase fw-bolder btn__blue'>{props.textContent}</button>
    )
}