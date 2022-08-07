import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import context from '../../context/context'
import CartProduct from '../cartProducts/CartProduct';
import './Cart.css'

function Cart(props) {
    let { cart, totalBill, countBill, tax, setNotificationMsg, getDiscount, grandTotals, grandTotal, cartUpdated, setCartUpdated } = useContext(context);
  
    clearTimeout(()=>{
    setTimeout(() => {
        
        
        
    }, 1000)
    }, 2000)
    useEffect(() => {
        if(cart.length !== 0){
            document.getElementById('checkout-btn').style.pointerEvents = 'none'
            props.setNotification(true);
            setNotificationMsg("Click on Update Cart to proceed")
        }
    }, [])
    
    
    

   
    const updateCart = () =>{
        countBill();
        grandTotal();
        setCartUpdated(true);
        document.getElementById('coupon-btn').disabled = false
        document.getElementById('checkout-btn').style.pointerEvents = 'auto'
    }


    const [coupon, setCoupon] = useState("");
    const onChange = (e)=>{
        setCoupon(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!cartUpdated){
            setNotificationMsg("Please click on the update cart")
            props.setNotification(true)
        }
        if(cartUpdated){
            if(coupon !== 'AlphaMan'){
                setNotificationMsg("Invalid coupon")
                props.setNotification(true)
            }
            else{
                updateCart()
                getDiscount()
                setNotificationMsg("You got the 5% off")
                props.setNotification(true)
                document.getElementById('coupon-btn').disabled = true
            }
        }    
    }    

    if(cart.length === 0){
        return (<>
            <h3 className='page-title'>Cart</h3>
            <div className="no-product-in-cart">
                <p>There is no product in the cart</p>
                <Link to='/shop'><button className='btn'>Return to shop</button></Link>
            </div>
            </>
        )
    }
  return (
      <>
    <h3 className='page-title'>Cart</h3>
    <div className="cart">
        <div className="cart-left">
            <div>
                {cart.map((product)=>{
                    return <CartProduct product={product} setCartUpdated={setCartUpdated} setNotification={props.setNotification}/>
                })}
            </div>
            <button className='btn' style={{width:'100%'}} onClick={updateCart}>Update Cart</button>
        </div>
        <div className="cart-right">
            <div className="coupon">
                <h3>Get 5% off</h3>
                <form onSubmit={onSubmit}>
                    <input type="text" id='coupon' placeholder='Enter coupon here' required value={coupon} onChange={onChange}/>
                    <button className='btn' id='coupon-btn'>Apply Coupon</button>
                </form>
            </div>
            <div className="reciept">
                <h3>Product</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
            </div>
            {cart.map((product)=>{
                return <div className="reciept-items">
                    <p>{product.p_title.slice(0,15).concat('...')}</p>
                    <p>{product.p_quantity}</p>
                    <p>{product.p_regularprice}$</p>
                </div>
            })}
            <div className='border'></div>
            <div className='totals'>
                <div>
                    <h3>Totals</h3>
                    <h3>5% Tax</h3>
                    <h3>Shipment</h3>
                </div>
                <div>
                    <h3>{totalBill}$</h3>
                    <h3>{tax}$</h3>
                    <h3>50$</h3>
                </div>
            </div>
            <div className="solid-border"></div>
            <div className="grand-totals">
                <h3>Grand Totals</h3>
                <h3>{grandTotals}$</h3>
            </div>
            <Link to='/checkout' id='checkout-btn'><button className='btn' id='myBtn'>Proceed To Checkout</button></Link>
        </div>
    </div>
    </>
  )
}

export default Cart