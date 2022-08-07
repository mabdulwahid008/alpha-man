import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-section">
        <div>
            <i className="fa-solid fa-arrows-rotate"></i>
            <p>Change from store</p>
        </div>
        <div>
            <i className="fa-solid fa-truck-fast"></i>
            <p>Fast and free cargo</p>
        </div>
        <div>
            <i className="fa-solid fa-wallet"></i>
            <p>Payment at the door</p>
        </div>
    </div>
  )
}

export default Footer
