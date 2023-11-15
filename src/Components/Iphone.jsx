import Sidebar from "./Sidebar"
import ProductGallary from "./ProductGallary"

const Iphone = () => {
    return (
        <>
            <div className="storeBody d-flex w-80">
                <Sidebar />
                <div className="storeBox">
                    <div className="homeSliderBottom">
                        <div>
                            <h1>iPhone 15 Pro</h1>
                            <p>Performance and design. Taken right to the edge</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <ProductGallary category="iphone" />
                </div>
            </div>
        </>
    )
}

export default Iphone