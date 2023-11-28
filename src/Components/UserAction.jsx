/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { getCartData, getLoggedUser } from "./Redux/Slice";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const UserAction = () => {
    let cartData = useSelector(state => state.ECommerce.cartData);
    let loggedUser = useSelector(state => state.ECommerce.loggedUser);
    let [logoutBtn, setLogoutBtn] = useState(true);
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
    let data = {};
    const setData = (e) => {
        data[e.target.name] = e.target.value
    }
    const sendData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', data).then(res => console.log(res.data))
    }
    function setUserData(username) {
        localStorage.setItem("loggedUser", username);
        dispatch(getLoggedUser())
    }
    function toggleLogginBtn() {
        setLoginView(true)
        setLogoutBtn(!logoutBtn)
        
    }
    function logoutUser() {
        loggedUser && localStorage.removeItem("loggedUser")
        setLoginView(false);
        dispatch(getLoggedUser())
    }
    const sendLoginData = (e) => {
        let data = {}
        const tosterSuccess = (data) => toast.success(data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        const tosterError = (data) => toast.error(data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        e.preventDefault()
        const emailReg = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if (emailReg.test(e.target.email.value)) {
            data = {
                "email": e.target.email.value ?? null,
                "password": e.target.password.value
            }
            axios.post("http://localhost:3000/login", data).then(res => res.data.msg ? setUserData(res.data.username) : console.log(res.data.err));

        }
        else {
            toast.error('Invalid Email or password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
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
                <div className="userActions">
                    <button className="mx-1 cartBtn" onClick={() => toggleLogginBtn()}><i className="fa-solid fa-user px-0-5 "></i>{loggedUser ?? "login"}</button>
                    {(loggedUser && logoutBtn) && <button className="logoutBtn cartBtn" onClick={() => logoutUser()}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</button>}
                    {/* {loggedUser && <button className="mx-1 cartBtn" onClick={() => setLoginView(true)}><i className="fa-solid fa-user px-0-5"></i>{loggedUser ?? "login"}</button>} */}
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
                                        <form onSubmit={sendLoginData} method='POST'>
                                            <div className="loginForm">
                                                <TextField id="standard-basic" label="Enter Email" variant="standard" name='email' />
                                                <br />
                                                <TextField id="standard-basic" label="Enter Password" variant="standard" name='password' type='password'></TextField>
                                                <br />
                                                <button className="btn btn-danger login-btn" type="submit">Login</button>
                                                <h5><Link onClick={() => setToggleView(true)}>New To ISHOP? Create an account</Link></h5>
                                            </div>
                                        </form>
                                    </div>
                                </> :
                                <>
                                    <div className="sidebarUserView">
                                        <h1>Looks like you're new here</h1>
                                        <p>Sign up with your mobile number to get started</p>
                                    </div>
                                    <div className="loginView">
                                        <div className="closeIcon"><i className="fa-solid fa-xmark" onClick={() => resetForm()}></i></div>
                                        <form onSubmit={sendData} method='post'>
                                            <div className="loginForm">
                                                <TextField id="standard-basic1" label="Enter Name" variant="standard" name='name' onChange={setData} />
                                                <br />
                                                <TextField id="standard-basic2" label="Enter Email" variant="standard" name='email' onChange={setData} />
                                                <br />
                                                <TextField id="standard-basic3" label="Enter Password" variant="standard" name='password' type='password' onChange={setData} />
                                                <br />
                                                <TextField id="standard-basic4" label="Enter Gender" variant="standard" name='gender' onChange={setData} />
                                                <br />
                                                <Button variant="contained" color='warning' type='submit'>Submit</Button>
                                                <br />
                                                <button className="btn signup-btn" onClick={() => setToggleView(false)}>Existing User ? Log in</button>
                                            </div>
                                        </form>
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