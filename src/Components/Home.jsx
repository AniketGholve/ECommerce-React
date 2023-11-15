import { Suspense, lazy, useState } from "react"
import { Link } from "react-router-dom"

import ShippingDetails from "./ShippingDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
const Card1 = lazy(() => import('./Card'));
const Home = () => {
    let [activeSubNav, setActiveSubNav] = useState("All");
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'slides'
    };
    let data = useSelector((state) => state.ECommerce.storeData);
    return (
        <>
            <div className="homeSlider w-80">
                <div></div>
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
            <div className="homeSliderBottom w-80">
                <div>
                    <h1>iPhone 15 Pro</h1>
                    <p>Performance and design. Taken right to the edge</p>
                    <button>Shop Now</button>
                </div>
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
                            <Card1 key={key} data={item.price} name={item.name} imageUrl={item.url} id={item.id}/>
                        </Suspense>
                    ))
                }
            </Slider>
        </>

    )
}

export default Home