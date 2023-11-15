import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToCart } from "./Redux/Slice";
const Details = () => {
    let id = useParams().id;
    let dispatch = useDispatch()
    let Navi = useNavigate();
    let storeData = useSelector(state => state.ECommerce.storeData)
    let data = storeData.filter(item => item.id === parseInt(id))
    let ratingStar = []
    for (let i = 0; i < data[0].rating; i++) {
        ratingStar.push("⭐")
    }
    let addToCartFunction = () => {
        dispatch(addToCart(data[0]))
        Navi("/cartdetails")
    }
    return (
        <>
            <div className="d-flex w-80" >
                <div style={{ width: "80%", marginTop: '7em' }}>
                    <Link className="back-btn" onClick={() => Navi(-1)}><i className="fa-solid fa-arrow-left"></i></Link>
                    <div style={{ background: `url(${data[0].url}) no-repeat center`, height: '50vh', width: "100%", backgroundSize: "contain" }}></div>
                </div>
                <div className="productDetails">
                    <h1>{data[0].name}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quaerat ad eligendi ipsum? Quasi iste voluptate voluptatibus in velit molestiae dolor officiis distinctio possimus aperiam vitae eaque non est iure quas enim, optio, amet eius animi doloremque aliquid dolorem! Error.</p>
                    <p className="rating">{ratingStar}</p>
                    <h2>{data[0].price}</h2>
                    <div className="thumb">
                        <img src={data[0].url} alt="" />
                        <img src={data[0].url} alt="" />
                        <img src={data[0].url} alt="" />
                        <img src={data[0].url} alt="" />
                    </div>
                    <div className="detailsBtn">
                        <button className="btn btn-warning" onClick={addToCartFunction}>Add To Cart</button>
                        <button className="btn btn-danger">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details