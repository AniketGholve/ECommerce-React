import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="storeSidebar">
            <div className="accesories">
                <h3>ACCESORIES</h3>
                <Link>Apple Car</Link>
                <Link>Air port & wireless</Link>
                <Link>Cables & Docks</Link>
                <Link>Cases & Films</Link>
                <Link>Charging Devices</Link>
                <Link>Connected home</Link>
                <Link>Headphones</Link>
            </div>
            <div className="brand">
                <h3>Brand</h3>
                <Link>Apple</Link>
                <Link>LG</Link>
                <Link>Samsung</Link>
                <Link>Siemens</Link>
            </div>
        </div>
    )
}

export default Sidebar