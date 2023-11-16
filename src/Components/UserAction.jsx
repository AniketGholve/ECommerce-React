/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { getCartData, getLoggedUser } from "./Redux/Slice";

const UserAction = () => {
    let cartData = useSelector(state => state.ECommerce.cartData);
    let loggedUser = useSelector(state => state.ECommerce.loggedUser);
    // let loggedUser = "Aniket";
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartData())
        dispatch(getLoggedUser())
    }, [])
    let Navi = useNavigate();

    let [loginView, setLoginView] = useState(false)
    let [toggleView, setToggleView] = useState(false)
    function resetForm() {
        setLoginView(false);
        setToggleView(false);
    }
    return (
        <>
            <div className="d-flex justify-content-around ">
                <div>
                    <select name="" id="" className="mx-1 border-none">
                        <option value="" selected>En</option>
                    </select>
                    <select className="mx-1 border-none">
                        <option value="" selected>$</option>
                    </select>
                </div>
                <div>
                    <button className="mx-1 cartBtn" onClick={() => setLoginView(true)}><i className="fa-solid fa-user px-0-5"></i>{loggedUser ?? "login"}</button>
                    <button className="cartBtn" onClick={() => Navi("/cartdetails")}><i className="fa-solid fa-cart-shopping"></i> Items <sup style={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>{cartData.length}</sup></button>
                </div>
            </div>
            {
                (loginView && loggedUser === null) &&
                <>
                    <div className="overlay" onClick={() => resetForm()}></div>
                    <div className="model">
                        {
                            !toggleView ?
                                <>
                                    <div className="sidebarUserView">
                                        <h1>Login</h1>
                                        <p>Get access to your Orders, Wishlist and Recommendation</p>
                                    </div>
                                    <div className="loginView">
                                        <div className="closeIcon"><i className="fa-solid fa-xmark" onClick={() => resetForm()}></i></div>
                                        <div className="loginForm">
                                            <input type="text" placeholder="Enter Username" />
                                            <input type="text" placeholder="Enter Password" />
                                            <button className="btn btn-danger login-btn">Login</button>
                                            <h5><Link onClick={() => setToggleView(true)}>New To ISHOP? Create an account</Link></h5>
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className="sidebarUserView">
                                        <h1>Looks like you're new here</h1>
                                        <p>Sign up with your mobile number to get started</p>
                                    </div>
                                    <div className="loginView">
                                        <div className="closeIcon"><i className="fa-solid fa-xmark" onClick={() => resetForm()}></i></div>
                                        <div className="loginForm">
                                            <input type="text" placeholder="Enter Name" />
                                            <input type="text" placeholder="Enter Email" />
                                            <input type="text" placeholder="Enter Username" />
                                            <input type="text" placeholder="Enter Password" />
                                            <button className="btn btn-danger login-btn">Continue</button>
                                            <button className="btn signup-btn" onClick={() => setToggleView(false)}>Existing User ? Log in</button>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </>

            }
        </>
    )

}

export default UserAction