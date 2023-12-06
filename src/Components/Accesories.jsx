import Sidebar from "./Sidebar"
import ProductGallary from "./ProductGallary"
import Slider from "react-slick";

const Accesories = () => {
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
                            <img src="https://mobijacks.com/wp-content/uploads/2021/06/Mobijack-Accessories-Banner.jpg" alt="" />
                            <img src="https://static.esrgear.com/blog/wp-content/uploads/2022/03/Banner-PC.jpg  " alt="" />
                            <img src="https://www.ankersingapore.com/pub/media/catalog/category/lightning_cable.jpg" alt="" />
                        </Slider>
                    </div>
                    <ProductGallary category="accessories" />
                </div>
            </div>
        </>
    )
}

export default Accesories