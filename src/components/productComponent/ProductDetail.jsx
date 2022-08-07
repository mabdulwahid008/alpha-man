import React, { useContext, useState } from 'react'
import './ProductDetail.css'
import context from '../../context/context'
import { motion } from 'framer-motion'

function ProductDetail(props) {
    const contextApi = useContext(context);
    const { selectedProduct, addToCart, cart } = contextApi;

    const findproduct =cart.find(cart=>cart.p_id === selectedProduct.p_id);
    const initialQuantity = findproduct !== undefined ? findproduct.p_quantity : 1
    console.log(initialQuantity);

    const [quantity, setQuantity] = useState(initialQuantity)
    const increaseQuantity = () => {
        setQuantity(quantity+1)
    }
    const decreaseQuantity = () => {
        if(quantity !== 1)
            setQuantity(quantity-1)
    }

    const productImg = [{image : selectedProduct.p_img1}, {image : selectedProduct.p_img2}, {image : selectedProduct.p_img3}, {image : selectedProduct.p_img4},]
    const [current, setCurrent] = useState(0)
    const next = () =>{
            setCurrent(current === productImg.length - 1 ? 0 : current + 1)
    }
    const prev = () =>{
        setCurrent(current === 0 ? productImg.length - 1  : current - 1)
    }
  return (
    <div className="productDetail">
        <div>
            {productImg.map((slide, index)=>{
                return  <div key={index}>
                    {index == current && 
                    <motion.img
                    initial = {{x:-400,opacity: 0}}
                    animate = {{x:0, opacity: 1, scale:1, transition:{duration:1, ease:'easeOut'}}}
                    exit = {{ opacity: 0}}
                    className='productImg' src={slide.image} alt="" />
                    }
                </div>
            })}
        </div>

        <div className='product-content'>
            <h2>{selectedProduct.p_title}</h2>
            <p>{selectedProduct.p_regularprice}$</p>
            {/* For mobile */}
            <div className='slide-btn-mobile'>
                <i className='fas fa-angle-left' onClick={next}/>
                <i className='fas fa-angle-right' onClick={prev}/>
            </div>
            {/* ----- */}
            <p>{selectedProduct.p_sdesc}</p>
            <p>{selectedProduct.p_ldesc}</p>
            <div className='slide-btn'>
                <i className='fas fa-angle-left' onClick={next}/>
                <i className='fas fa-angle-right' onClick={prev}/>
            </div>
            <div>
                <div onClick={decreaseQuantity}>-</div>
                <div>{quantity}</div>
                <div onClick={increaseQuantity}>+</div>
            </div>
            <button className='btn aad-to-cart-btn' onClick={()=>{addToCart(selectedProduct, quantity); props.setNotification(true)}}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetail