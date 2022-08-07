import React from 'react'
import Shop from '../components/shopComponent/Shop'
import { motion } from 'framer-motion'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function ShopPage(props) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:.5}}}>
        <Header/>   
        <Shop setNotification={props.setNotification}/>
        <Footer/>
    </motion.div>
  )
}

export default ShopPage