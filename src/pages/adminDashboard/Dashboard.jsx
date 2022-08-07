import React from 'react'
import './Dashboard.css'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../images/logo.png'
import AddProduct from '../../components/addProduct/AddProduct'
import Category from '../../components/addCategory/Category'

function Dashboard() {
  return (
    <div className='dashboard' >
    <div className='navigation'>
        <img className='logo' src={logo}/>
        <div>
            <ul className='side-menu'>
                <li><Link to=''><i className="fa fa-list-ul"/>Home</Link></li>
                <li><Link to=''><i className="fa fa-envelope"/>Orders</Link></li>
                <li><Link to='admin-products'><i className="fa fa-calendar"></i>Products</Link></li>
                <li><Link to=''><i className="fa fa-user"/>Categories</Link></li>
            </ul>
        </div>
    </div>
    <div className='section'>
        <Category/>
        {/* <AddProduct/> */}
        {/* <Outlet/> */}
    </div>
</div>
  )
}

export default Dashboard