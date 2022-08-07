import React, { useContext } from 'react'
import Character from '../components/character/Character'
import Footer2 from '../components/footer2/Footer'
import Hero from '../components/hero/Hero'
import ProductDetailSection from '../components/homeProductDetail/ProductDetailSection'
import ProductSection from '../components/homeProductSection/ProductSection'
import context from '../context/context'
import { motion } from 'framer-motion'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Homepage() {
  const { setCategory } = useContext(context);
    setCategory("")
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:.5}}}>
        <Header/>
        <Hero/>
        <Character/>
        <ProductSection/>
        <ProductDetailSection/>
        <Footer2/>
        <Footer/>
    </motion.div>
  )
}

export default Homepage