import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCartData } from "./Redux/Slice";

const Success = () => {
    let dispatch = useDispatch();
    useEffect(()=>{
        localStorage.removeItem("cartData")
        dispatch(getCartData())
    })
    return (
        <div className="success-message">
            <img src="https://i.gifer.com/7efs.gif" alt="" />
            <h1 className="success-message__title">Payment Received</h1>
            <div className="success-message__content">
                <p>Thank You For the Orders</p>
            </div>
        </div>
    )
}

export default Success