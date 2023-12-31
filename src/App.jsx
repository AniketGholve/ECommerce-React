import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar, { NavbarMob } from './Components/Navbar'
import Home from './Components/Home'
import UserAction from './Components/UserAction'
import Store from './Components/Store'
import Iphone from './Components/Iphone'
import Ipad from './Components/Ipad'
import Mac from './Components/Mac'
import Accesories from './Components/Accesories'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Search from './Components/Search'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import { getProducts } from './Components/Redux/Slice'
import { useDispatch } from 'react-redux'
import Success from './Components/Success'

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <BrowserRouter>
        <UserAction />
        <div className='show-nav'>
          <Navbar />
        </div>
        <div className='show-mob-nav'>
          <NavbarMob />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/iphone' element={<Iphone />} />
          <Route path='/ipad' element={<Ipad />} />
          <Route path='/mac' element={<Mac />} />
          <Route path='/accesories' element={<Accesories />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/cartdetails' element={<Cart />} />
          <Route path='/search/:product' element={<Search />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
