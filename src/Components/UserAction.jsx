import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getCartData } from "./Redux/Slice";

const UserAction = () => {
    let cartData = useSelector(state => state.ECommerce.cartData);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartData())
        console.log("renderd")
    }, [])
    let Navi = useNavigate();
    return (
        <div className="d-flex justify-content-around ">
            <div>
                <select name="" id="" className="mx-1 border-none">
                    <option value="" selected>En</option>
                </select>
                <select className="mx-1 border-none">
                    <option value="" selected>₹</option>
                </select>
            </div>
            <div>
                <button className="mx-1 border-none">Login</button>
                <select id="" className="mx-1 border-none">
                    <option value="" selected>Login</option>
                </select>
                <button className="cartBtn" onClick={() => Navi("/cartdetails")}><i className="fa-solid fa-cart-shopping"></i> Items <sup style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>{cartData.length}</sup></button>
            </div>
        </div>
    )
}

export default UserAction