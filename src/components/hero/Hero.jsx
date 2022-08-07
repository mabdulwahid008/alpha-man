import React from 'react'
import Heroslider from '../heroSlider/Heroslider'
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
        <div className="overlay">
            <Heroslider/>
        </div>
    </div>
  )
}

export default Hero