import React, { useState } from 'react'
import './Heroslider.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Heroslider() {
    const imageArray = [{image: img1}, {image: img2}, {image: img3}]
    const [current, setCurrent] = useState(0);

    const next = () =>{
        setCurrent(current === imageArray.length - 1 ? 0 : current + 1)
    }
    // const prev = () =>{
    //     setCurrent(current === 0 ? imageArray.length - 1  : current - 1)
    // }
    setTimeout(()=>{
        next();
    }, 4000)

    const transition = {type: 'spring', duration:2}
    return (
    <div className='slider'>
       <div>
            {imageArray.map((slide, index)=>{
                    return <div key={index}>
                        {index === current && (
                            <motion.img 
                            initial = {{opacity:0.3}}
                            whileInView = {{opacity:1}}
                            transition = {transition}
                            src={slide.image} alt="Alpha Man" className='slidingImg' />
                            )}
                        </div>
                })}
        </div> 
    <div className='hero-text'>
        <h2>Summer/Spring Collection <span>'22</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia quaerat nesciunt.</p>
        <Link to='/shop'><button className='btn'>See Collection</button></Link>
    </div>
    </div>
  )
}

export default Heroslider