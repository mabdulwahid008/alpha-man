import React from 'react'
import ProductDetail from '../components/productComponent/ProductDetail'
import { motion } from 'framer-motion'

function ProductPage(props) {
  
  return (
    <motion.div initial={{width:0}} animate={{width:'100%'}} exit={{x:window.innerWidth, transition:{duration:1}}}>
        <ProductDetail setNotification={props.setNotification}/>
    </motion.div>
  )
}

export default ProductPage