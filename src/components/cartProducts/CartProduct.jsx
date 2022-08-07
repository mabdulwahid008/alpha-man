import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import context from '../../context/context';
import './CartProduct.css'

function CartProduct(props) {
    const { removeProduct, setselectedProduct, addToCart, setNotificationMsg } = useContext(context)
    const {p_id, p_img1, p_quantity, p_title, p_regularprice} = props.product;

    const [quantity, setQuantity] = useState(p_quantity);
    const handleIncrease = ()=>{
      addToCart(props.product, quantity+1)
      setQuantity(quantity+1);
      props.setCartUpdated(false); 
      document.getElementById('coupon-btn').disabled = false
      document.getElementById('checkout-btn').style.pointerEvents = 'none'
      props.setNotification(true);
      setNotificationMsg("Click on Update Cart to proceed")
    }
    const handledecrease = ()=>{
      if(quantity !== 1){
        addToCart(props.product, quantity-1)
        setQuantity(quantity-1);
        props.setCartUpdated(false); 
        document.getElementById('coupon-btn').disabled = false
        document.getElementById('checkout-btn').style.pointerEvents = 'none'
        props.setNotification(true);
        setNotificationMsg("Click on Update Cart to proceed")
      }
    }

    const redirect = ()=>{
      props.setCartUpdated(false); 
      setselectedProduct(props.product);
      document.getElementById('coupon-btn').disabled = false; 
      document.getElementById('checkout-btn').style.pointerEvents = 'none'
  }

    const deleteProduct = ()=>{
      props.setCartUpdated(false); 
      removeProduct(props.product); 
      props.setNotification(true);
      document.getElementById('coupon-btn').disabled = false; 
      document.getElementById('checkout-btn').style.pointerEvents = 'none'
  }
    
  return (
    <div className="product-in-cart" key={p_id}>
        <img src={p_img1} alt={p_title}/>
        <div>
            <Link to='/product' onClick={redirect}><h3>{p_title.length > 40 ? p_title.slice(0, 40).concat('...') : p_title}</h3></Link>
            <p>{p_regularprice}$ / per</p>
            <div>
              <button className='btn' onClick={handledecrease}>-</button>
              <p>{p_quantity}</p>
              <button className='btn' onClick={handleIncrease}>+</button>
            </div>
        </div>
        <i className="fa-solid fa-trash-can" onClick={deleteProduct}></i>
    </div>
  )
}

export default CartProduct