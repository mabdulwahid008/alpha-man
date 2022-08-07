import React from 'react'
import Checkout from '../components/checkout/Checkout'
import Header from '../components/header/Header'

function CheckoutPage(props) {
  return (
    <div>
        <Header/>
        <Checkout setNotification={props.setNotification}/>
    </div>
  )
}

export default CheckoutPage