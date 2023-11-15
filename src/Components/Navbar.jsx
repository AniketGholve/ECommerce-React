import { NavLink } from 'react-router-dom'
import './style.css'
const Navbar = () => {
    return (
        <div className="nav">
            <h1 className='brandName'><span>i</span>SHOP</h1>
            <ul>
                <li><NavLink to={"/"}>HOME</NavLink></li>
                <li><NavLink to={"/store"}>STORE</NavLink></li>
                <li><NavLink to={"/iphone"}>IPHONE</NavLink></li>
                <li><NavLink to={"/ipad"}>IPAD</NavLink></li>
                <li><NavLink to={"/mac"}>MACBOOK</NavLink></li>
                <li><NavLink to={"/accesories"}>ACCESORIES</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar