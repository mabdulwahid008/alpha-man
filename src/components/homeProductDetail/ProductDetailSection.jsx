import React from 'react'
import './ProductDetailSection.css'
import img1 from '../../images/img5.png'
import img2 from '../../images/img6.png'

function ProductDetailSection() {
  return (
    <div className="productSection">
        <h2>Product Detail</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit sit molestiae, voluptatibus natus, fuga, id magnam veniam qui laboriosam odit? Ipsa nulla necessitatibus quod aliquid voluptatum, pariatur quae modi!</p>

        <div>
            <div className='left-img'>
                <img src={img1} alt="Alpha Man" />
                <div>
                    <h2>the classic line</h2>
                </div>
            </div>
            <div className='right-img'>
                <img src={img2} alt="Alpha Man" />
                <div>
                    <h2>sporty attitude</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailSection