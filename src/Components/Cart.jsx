import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getCartData, removeFromCart, getLoggedUser } from "./Redux/Slice"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    let dispatch = useDispatch()
    let data = useSelector(state => state.ECommerce.cartData)
    let amtArray = data.map((item) => parseInt(item.price.split("$")[1] * item.quantity))
    let totalAmt = amtArray.reduce((item, acc) => acc + item, 0)
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51OLfmRSFBQcGNae0imTwNJsk0l4kJ7cBgdwuzWBbNjUARpdjPb1x2tpEOX4d0pzYqsjetNJHqZYgfxWXohcFB96M00vdsAkzac");

        const body = {
            products: data
        }
        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:3000/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });
        if (result.error) {
            console.log(result.error);
            return
        }
    }

    useEffect(() => {
        dispatch(getCartData())
    }, [])
    let loggedUser = useSelector(state => state.ECommerce.loggedUser)
    let checkDetails = async () => {
        dispatch(getLoggedUser())
        if (loggedUser !== null) {
            makePayment()
        }
        else {
            toast.error("User Not Logged In", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }
    return (
        <>
            <ToastContainer />
            {
                data.length === 0 ?
                    <div className="emptyCartDiv">
                        <img src="./emptycart.png" className="emptyCartImg" />
                        <h1>Cart Is Empty</h1>
                    </div>
                    :
                    <div className="cart">
                        <div>
                            {
                                data.map((item, key) => (
                                    <div key={key} className="cartDiv">
                                        <div className="cartProducts" style={{ backgroundImage: `url(${item.url})` }}></div>
                                        <div className="cartDetails">
                                            <h2>{item.name}</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere necessitatibus nemo recusandae minus sint ut ad voluptatum magni! Consequuntur, hic!</p>
                                            <button className="btn-options btn-warning" onClick={() => { dispatch(removeFromCart(item)); dispatch(getCartData()) }}>-</button><span className="quantity">{item.quantity}</span><button className="btn-options btn-danger" onClick={() => { dispatch(addToCart(item)); dispatch(getCartData()) }}>+</button>
                                            <h3>{"$ " + parseInt(item.price.split("$")[1]) * parseInt(item.quantity)}</h3>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="placeOrderDiv">
                                <button className="btn btn-danger" onClick={checkDetails}>Place Order</button>
                            </div>
                        </div>
                        <div className="priceDetails">
                            <h3>Price Details</h3>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <p>Price ( {data.length} items ) </p>
                                <p>${totalAmt}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Delivery Charges </p>
                                <p>$1</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between" >
                                <h3>Total Amount</h3>
                                <h3>${totalAmt + 1}</h3>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Cart