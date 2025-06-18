import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import { useTranslation } from 'react-i18next' // <-- Tarjima hook
import './til.css'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      {/* Til tanlash select (zamonaviy dropdown) */}
      <div className="lang-switcher">
        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
          <option value="uz">O'zbekcha</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Login popup */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
