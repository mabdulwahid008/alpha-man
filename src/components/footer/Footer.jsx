import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion'

function Footer() {
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
                    <li>Contact Us</li>
                    <li>Size Guide</li>
                    <li>My Order</li>
                    <li>Payment</li>
                    <li>Our Services</li>
                </ul>
            </div>
            <div>
                <h3>Shipping & Returns</h3>
                <ul className="footer-menu">
                    <li>Shipping</li>
                    <li>Track your Order</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div>
                <h3>Legal Area</h3>
                <ul className="footer-menu">
                    <li>Terms and conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h3>Corporate</h3>
                <ul className="footer-menu">
                    <li>About Us</li>
                    <li>Careers</li>
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