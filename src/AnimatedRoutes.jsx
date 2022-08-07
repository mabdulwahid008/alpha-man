import React from 'react'
import Homepage from './pages/Homepage';
import {Routes, Route, useLocation} from "react-router-dom";
import AdminLoginPage from './pages/AdminLoginPage';
import Dashboard from './pages/adminDashboard/Dashboard';
import { useState } from 'react';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import DefaultPage from './components/footerRedirects/DefaultPage';
import CheckoutPage from './pages/CheckoutPage';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes(props) {
    const [authorization, setAuthorization] = useState(false)
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
                <Route path='/' element={ <Homepage /> }/>
                <Route path='/shop' element={ <ShopPage setNotification={props.setNotification} /> }/>
                <Route path='/product' element={<ProductPage setNotification={props.setNotification}/>}/>
                <Route path='/cart' element={<CartPage setNotification={props.setNotification} />} />
                <Route path='/checkout' element={<CheckoutPage setNotification={props.setNotification} />} />
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/login' element={ authorization ? <Dashboard/> : <AdminLoginPage setAuthorization={setAuthorization}/>}/>
                <Route path='/my-favourite' element={ authorization ? <Dashboard/> : <AdminLoginPage setAuthorization={setAuthorization}/>}/>
                <Route path='/privacy-policy' element={<DefaultPage title={"Privacy Policy"}/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes