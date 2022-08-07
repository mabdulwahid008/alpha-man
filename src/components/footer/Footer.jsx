import React, { useContext } from 'react'
import './Footer.css'
import { motion } from 'framer-motion'
import context from '../../context/context';
import { Link } from 'react-router-dom';

function Footer() {
    const { setPageTitle } = useContext(context)
    const date = new Date();
  return (
    <motion.div 
    initial = {{opacity: 0}}
    whileInView = {{opacity: 1, transition: {duration: 1, ease: 'easeIn'}}}
    id='footer'>
        <div className='footer-top'>
            <div>
                <h3>Customer Care</h3>
                <ul className="footer-menu">
                     <Link to='/footer-redirects' onClick={()=>{setPageTitle("Reach Us")}}><li>Reach Us</li></Link>
                     <Link to='/footer-redirects' onClick={()=>{setPageTitle("Size Guide")}}><li>Size Guide</li></Link>
                     <Link to='/footer-redirects' onClick={()=>{setPageTitle("My Order")}}><li>My Order</li></Link>
                     <Link to='/footer-redirects' onClick={()=>{setPageTitle("Payment")}}><li>Payment</li></Link>
                     <Link to='/footer-redirects' onClick={()=>{setPageTitle("Our Services")}}><li>Our Services</li></Link>
                </ul>
            </div>
            <div>
                <h3>Shipping & Returns</h3>
                <ul className="footer-menu">
                    <Link to='/footer-redirects' onClick={()=>{setPageTitle("Shipping")}}><li>Shipping</li></Link>
                    <Link to='/footer-redirects' onClick={()=>{setPageTitle("Track your Order")}}><li>Track your Order</li></Link>
                    <Link to='/footer-redirects' onClick={()=>{setPageTitle("Returns")}}><li>Returns</li></Link>
                </ul>
            </div>
            <div>
                <h3>Legal Area</h3>
                <ul className="footer-menu">
                    <Link to='/footer-redirects' onClick={()=>{setPageTitle("Terms and conditions")}}><li>Terms and conditions</li></Link>
                    <Link to='/footer-redirects' onClick={()=>{setPageTitle("Privacy Policy")}}><li>Privacy Policy</li></Link>
                </ul>
            </div>
            <div>
                <h3>Corporate</h3>
                <ul className="footer-menu">
                    <Link to='/about'><li>About Us</li></Link>
                    <Link to='/footer-redirects' onClick={()=>{setPageTitle("Careers")}}><li>Careers</li></Link>
                </ul>
            </div>
        </div>
        <div className='footer-bootom'>
            <div>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <div>
                <h2>Alpha Man</h2>
            </div>
            <div>
                <p>Developed by Muhammad Abdulwahid</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer