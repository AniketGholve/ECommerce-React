import Sidebar from "./Sidebar"
import ProductGallary from "./ProductGallary"
import Slider from "react-slick"

const Iphone = () => {
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
                            <img src="https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png" alt="" />
                            <img src="https://s3b.cashify.in/gpro/uploads/2022/05/24035928/Featured_image_Apple-Smart-Watches-for-Women.jpg" alt="" />
                            <img src="https://invent.irujul.com/theme/default/img/npi/npi-20/watch_2020.jpg" alt="" />
                        </Slider>
                    </div>
                    <ProductGallary category="iphone" />
                </div>
            </div>
        </>
    )
}

export default Iphone