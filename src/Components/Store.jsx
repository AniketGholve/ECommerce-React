import Sidebar from "./Sidebar"
import { StoreGallary } from "./ProductGallary"

const Store = () => {
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
                    <StoreGallary />
                </div>
            </div>
        </>
    )
}

export default Store