import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import context from '../../context/context'
import './Checkout.css'

function Checkout(props) {
    const { setNotificationMsg, setCart } = useContext(context)
    const { cart, grandTotals, cartUpdated } = useContext(context)
    const [form, setForm] = useState({name:'', email:'', phone:'', country:'', city:'', street:''})

    const navigate = useNavigate()
    useEffect(() => {
        if(cartUpdated === false)
        navigate("/shop", { replace: true });
    }, [])
    

    const onChange = (e)=>{
        setForm({...form, [e.target.name] : e.target.value});
        console.log(form);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        setNotificationMsg("Your order is in process")
        props.setNotification(true);
        setTimeout(() => {
            navigate("/shop", { replace: true });
            setCart([])
        }, 4000);
    }
    
  return (
    <>
    <h3 className='page-title'>Checkout</h3>
    <div className="checkout">
        <div className="checkout-left">
            <h3>Enter Your Details</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Full Name <span>*</span></label>
                    <input type="text" id='name' name='name' placeholder='Enter your name' required onChange={onChange}/>
                </div>
                <div className='row'> 
                    <div>
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="email" id='email' name='email' placeholder='Enter your email' required onChange={onChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone <span>*</span></label>
                        <input type="text" id='phone' name='phone' placeholder='Enter your phone' required onChange={onChange}/>
                    </div>
                </div>
                <div className='row'> 
                    <div>
                        <label htmlFor="country">Country <span>*</span></label>
                        <input type="text" id='country' name='country' placeholder='Enter your country' required onChange={onChange}/>
                    </div>
                    <div>
                        <label htmlFor="city">City <span>*</span></label>
                        <input type="text" id='city' name='city' placeholder='Enter your city' required onChange={onChange}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="street">Street <span>*</span></label>
                    <input type="text" id='street' name='street' placeholder='Enter your street address' required onChange={onChange}/>
                </div>
                <div className='checkox-field'>
                    <input type="checkbox" id='returnPolicy' required/>
                    <label id='returnPolicy'>I agree to <Link to='/return-policy'>return policy</Link>.</label>
                </div>
                <button className='btn checkout-btn'>Place Order</button>
            </form>
        </div>
        <div className="checkout-right">
            <h3>Your order</h3>
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
            <div className="solid-border"></div>
            <div className="grand-totals">
                <h3>Grand Totals</h3>
                <h3>{grandTotals}$</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout