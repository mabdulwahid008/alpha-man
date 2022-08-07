import React, { useContext } from 'react'
import './ProductSection.css'
import { accessories } from '../../data/accessories'
import { readyToWear } from '../../data/readyToWear'
import { Link } from 'react-router-dom'
import context from '../../context/context'

function ProductSection() {
  const { setCategory } = useContext(context)
  return (
    <div className='man-of-the-moment'>

          <h2>Man of the <span>Moment</span></h2>

          <div>  
            <h3 className='heading'>Ready to wear on</h3>
            <div className='categorySection'>
              {readyToWear.map((category, index)=>{
                return <div key={index}>
                    <img src={category.c_img} alt={category.c_name} />
                    <Link to='/shop' onClick={()=>{setCategory(category.c_name)}}>
                      <div>
                        <h4>{category.c_name}</h4>
                      </div>
                    </Link>
                </div>
              })}
            </div>
          </div>

          <div>
            <h3 className='heading'>Accessories</h3>
            <div className='categorySection'>
              {accessories.map((category, index)=>{
                return<div key={index}>
                    <img src={category.c_img} alt={category.c_name} />
                    <Link to='/shop' onClick={()=>{setCategory(category.c_name)}}>
                      <div>
                        <h4>{category.c_name}</h4>
                      </div>
                    </Link>
                </div>
              })}
            </div>
          </div>

      </div>
  )
}

export default ProductSection