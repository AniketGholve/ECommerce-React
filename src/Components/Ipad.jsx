import Slider from "react-slick"
import ProductGallary from "./ProductGallary"
import Sidebar from "./Sidebar"

const Ipad = () => {
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
        <>
            <div className="storeBody d-flex w-80">
                <Sidebar />
                <div className="storeBox">
                    <div className="homeSliderBottom">
                        <Slider {...mainBannerSettings}>
                            <img src="https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/03/iPad_Air_Web_Banner_Avail_1400x700__SEA_FFH.png?fit=1400%2C700&ssl=1" alt="" />
                            <img src="https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/11/SEA_iPad_Pro_Web_Banner_Avail_1400x700_FFH.png?fit=1400%2C700&ssl=1" alt="" />
                            <img src="https://media.idownloadblog.com/wp-content/uploads/2020/04/iPad-Pro-float-ad-banner.jpg" alt="" />
                        </Slider>
                    </div>
                    <ProductGallary category="ipad" />
                </div>
            </div>
        </>
    )
}

export default Ipad