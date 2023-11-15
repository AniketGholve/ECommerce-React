import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserAction from './Components/UserAction'
import Store from './Components/Store'
import Iphone from './Components/Iphone'
import Ipad from './Components/Ipad'
import Mac from './Components/Mac'
import Accesories from './Components/Accesories'
import Details from './Components/Details'
import Cart from './Components/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserAction />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/iphone' element={<Iphone />} />
          <Route path='/ipad' element={<Ipad />} />
          <Route path='/mac' element={<Mac />} />
          <Route path='/accesories' element={<Accesories />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/cartdetails' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
