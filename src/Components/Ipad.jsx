import ProductGallary from "./ProductGallary"
import Sidebar from "./Sidebar"

const Ipad = () => {
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
                    <ProductGallary category="ipad" />
                </div>
            </div>
        </>
    )
}

export default Ipad