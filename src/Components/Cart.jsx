import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getCartData, removeFromCart } from "./Redux/Slice"


const Cart = () => {
    let dispatch = useDispatch()
    let data = useSelector(state => state.ECommerce.cartData)
    let amtArray = data.map((item) => parseInt(item.price.split("$")[1] * item.quantity))
    let totalAmt = amtArray.reduce((item, acc) => acc + item, 0)
    useEffect(() => {
        dispatch(getCartData())
    }, [])
    return (
        <>
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
                                <button className="btn btn-danger">Place Order</button>
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