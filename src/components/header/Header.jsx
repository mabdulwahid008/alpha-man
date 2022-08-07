import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { useLocation, Link } from 'react-router-dom'

function Header() {
    const location = useLocation();
  return (
      <>
    <div className="header" id="header">
        <div className="top-h">
            <div className="top-left">
                <ul className='nav'>
                    <Link to='/'><li className={location.pathname === '/' ? "active" : ''}>HOME</li></Link>
                    <Link to='/shop'><li className={location.pathname === '/shop' ? "active" : ''}>SHOP</li></Link>
                    <Link to='/about'><li className={location.pathname === '/about' ? "active" : ''}>ABOUT</li></Link>
                </ul>
            </div>
            <div className="mid-h">
                <img src={logo} alt="Alpha Man" />
            </div>
            <div className="top-right">
                <ul className='nav'>
                    <Link to='/login'><li className={location.pathname === '/login' ? "active" : ''}><i className="fa-solid fa-user"></i></li></Link>
                    <Link to='/my-favourite'><li><i className="fa-solid fa-heart"></i></li></Link>
                    <Link to='/cart'><li className={location.pathname === '/cart' ? "active" : ''}><i className="fa fa-shopping-cart"></i></li></Link>
                </ul>
            </div>
        </div>
        
        <hr/>
    </div>
    
        {/* Mobile Header */}

        <div className='mobile-header' id="header">
            <div>
                <img src={logo} alt="Alpha Man" />
            </div>
            <div className='hamburger-menu'>
                <input id='menu-toggle' type="checkbox" />
                <label className='menu-button' htmlFor='menu-toggle'>
                    <span></span>
                </label>
                <hr/>
                <ul className='menu-box'>
                    <Link to='/'><li className={location.pathname === '/' ? "active" : ''}>HOME</li></Link>
                    <Link to='/shop'><li className={location.pathname === '/shop' ? "active" : ''}>SHOP</li></Link>
                    <Link to='/about'><li className={location.pathname === '/about' ? "active" : ''}>ABOUT</li></Link>
                    <Link to='/cart'><li className={location.pathname === '/cart' ? "active" : ''}>Cart</li></Link>
                    <Link to='/login'><li className={location.pathname === '/login' ? "active" : ''}>My Account</li></Link>
                </ul>
            </div>
           
        </div>
        
    </>
  )
}

export default Header