import Sidebar from "./Sidebar"
import ProductGallary from "./ProductGallary"
import Slider from "react-slick"

const Mac = () => {
    var mainBannerSettings = {
        dots: false,
        pauseOnHover: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        fade: true,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slidesMain slider-no-arrow'
    };
    return (
        <div className="storeBody d-flex w-80">
            <Sidebar />
            <div className="storeBox">
                <div className="homeSliderBottom">
                    <Slider {...mainBannerSettings}>
                        <img src="https://www.greycom.com.cy/image/cache/catalog/Front%20Banner/2022/Buy%20Now/New_MacBook_Air_M2.BuyNow-1277x500.jpg" alt="" />
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1676d1134643233.61d98d3761a9b.jpg" alt="" />
                        <img src="https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png" alt="" />
                    </Slider>
                </div>
                <ProductGallary category="mac" />
            </div>
        </div>
    )
}

export default Mac