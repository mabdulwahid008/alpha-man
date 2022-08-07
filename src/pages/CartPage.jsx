import React, { useContext } from 'react'
import Cart from '../components/cart/Cart'
import context from '../context/context';
import { motion } from 'framer-motion'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function CartPage(props) {
  const { setCategory } = useContext(context);
    setCategory("")
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:.5}}}>
        <Header/>
        <Cart setNotification={props.setNotification}/>
        <Footer/>
    </motion.div>
  )
}

export default CartPage