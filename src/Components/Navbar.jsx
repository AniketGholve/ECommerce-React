import { NavLink } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
const Navbar = () => {
    return (
        <div className={"nav"}>
            <h1 className='brandName'><span>i</span>SHOP</h1>
            <ul>
                <li><NavLink to={"/"}>HOME</NavLink></li>
                <li><NavLink to={"/store"}>STORE</NavLink></li>
                <li><NavLink to={"/iphone"}>IPHONE</NavLink></li>
                <li><NavLink to={"/ipad"}>IPAD</NavLink></li>
                <li><NavLink to={"/mac"}>MACBOOK</NavLink></li>
                <li><NavLink to={"/accesories"}>ACCESORIES</NavLink></li>
            </ul>
        </div >
    )
}
const NavbarMob = () => {
    let [toggleNav, setToggleNav] = useState(false)
    return (
        <div className={!toggleNav ? "nav" : "nav nav-main"}>
            <h1 className='brandName'><span>i</span>SHOP</h1>
            <ul>
                {!toggleNav && <li><i className="fa-solid fa-bars hide-nav" onClick={() => setToggleNav(!toggleNav)}></i></li>}
                {toggleNav && <li><i className="fa-solid fa-xmark hide-nav" onClick={() => setToggleNav(!toggleNav)}></i></li>}
                {
                    toggleNav && <>
                        <li onClick={() => setToggleNav(!toggleNav)}><NavLink to={"/"}>HOME</NavLink></li>
                        <li onClick={() => setToggleNav(!toggleNav)}><NavLink to={"/store"}>STORE</NavLink></li>
                        <li onClick={() => setToggleNav(!toggleNav)}><NavLink to={"/iphone"}>IPHONE</NavLink></li>
                        <li onClick={() => setToggleNav(!toggleNav)}><NavLink to={"/ipad"}>IPAD</NavLink></li>
                        <li onClick={() => setToggleNav(!toggleNav)} ><NavLink to={"/mac"}>MACBOOK</NavLink></li>
                        <li onClick={() => setToggleNav(!toggleNav)}><NavLink to={"/accesories"}>ACCESORIES</NavLink></li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Navbar
export { NavbarMob }