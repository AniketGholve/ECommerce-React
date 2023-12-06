import { Suspense, lazy, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import ShippingDetails from "./ShippingDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Redux/Slice";
const Card1 = lazy(() => import('./Card'));
const Home = () => {
    let [activeSubNav, setActiveSubNav] = useState("All");
    // let arr = ["All", "Mac", "IPhone", "IPad", "IPod", "Accessories"]
    // let [count, setCount] = useState(0);
    // setInterval(() => {
    //     setCount((count + 1) % 6)
    //     setActiveSubNav(arr[count]);
    // }, 5000)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    };
    var mainBannerSettings = {
        arrows: true,
        dots: false,
        pauseOnHover: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        fade: true,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slidesMain'
    };
    let dispatch = useDispatch();
    setTimeout(() => {
        dispatch(getProducts())
    }, 100);
    useEffect(() => {
        dispatch(getProducts())
    })
    let data = useSelector((state) => state.ECommerce.storeData);
    return (
        <>
            <div className="w-80">
                <Slider {...mainBannerSettings}>
                    <img src="https://invent.irujul.com/theme/default/img/npi/npi-20/watch_2020.jpg" alt="" />
                    <img src="https://s3b.cashify.in/gpro/uploads/2022/05/24035928/Featured_image_Apple-Smart-Watches-for-Women.jpg" alt="" />
                    <img src="https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png" alt="" />
                </Slider>
            </div>
            <h2 className="text-center">BEST SELLER</h2>
            <div className="nav">
                <ul>
                    <li><Link className={activeSubNav === "All" ? "activeSubNav" : ""} onClick={() => setActiveSubNav("All")}>All</Link></li>
                    <li><Link className={activeSubNav === "Mac" ? "activeSubNav" : ""} onClick={() => setActiveSubNav("Mac")}>Mac</Link></li>
                    <li><Link className={activeSubNav === "IPhone" ? "activeSubNav" : ""} onClick={() => setActiveSubNav("IPhone")}>IPhone</Link></li>
                    <li><Link className={activeSubNav === "IPad" ? "activeSubNav" : ""} onClick={() => setActiveSubNav("IPad")}>IPad</Link></li>
                    <li><Link className={activeSubNav === "IPod" ? "activeSubNav" : ""} onClick={() => setActiveSubNav("IPod")}>IPod</Link></li>
                    <li><Link className={activeSubNav === "Accessories" ? "activeSubNav" : ""} onClick={() => setActiveSubNav("Accessories")}>Accessories</Link></li>
                </ul>
            </div>
            <div className="cardGallary">
                {
                    data.filter((val) => val.cat.includes(activeSubNav.toLowerCase())).map((item, key) => (
                        <Suspense key={key}>
                            <Card1 key={key} data={item.price} name={item.name} imageUrl={item.url} id={item.id} />
                        </Suspense>
                    ))
                }
            </div>
            <div className=" w-80">
            <Slider {...mainBannerSettings}>
                    <img src="https://www.maclocks.eu/media/upload/cms/banner-lp-ledge.jpg" alt="" />
                    <img src="https://file.hstatic.net/1000347078/collection/banner_macbook_92054b106e2d457f9391d59825973023.jpg" alt="" />
                    <img src="https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png" alt="" />
                </Slider>
            </div>
            <div className="shippingDetails">
                <ShippingDetails data={"lorem20"} name={"FREE SHIPPING"} imageUrl={"shipping.jpg"} />
                <ShippingDetails data={"$200"} name={"100% REFUND"} imageUrl={"refund.jpg"} />
                <ShippingDetails data={"$200"} name={"SUPPORT 24/7"} imageUrl={"support.jpg"} />
            </div>
            <h1 className="text-center mx-1">Feature Products</h1>
            <Slider {...settings} style={{ width: "60%", margin: "auto" }}>
                {
                    data.filter((val) => val.cat.includes("feature")).map((item, key) => (
                        <Suspense fallback={<div> Please Wait... </div>} key={key}>
                            <Card1 key={key} data={item.price} name={item.name} imageUrl={item.url} id={item.id} />
                        </Suspense>
                    ))
                }
            </Slider>
        </>

    )
}

export default Home