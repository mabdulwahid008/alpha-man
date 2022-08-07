import React, { useContext } from 'react'
import context from '../../context/context'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './DefaultPage.css'

function DefaultPage(){
  const { pageTitle } = useContext(context)
  return (
      <>
        <Header/>
    <div className='default-page'>
        <h2>{pageTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae, libero.</p><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id nesciunt possimus eveniet recusandae ea. Natus harum iure rem, fuga blanditiis eius culpa debitis nobis officia voluptates enim molestiae exercitationem!</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum commodi ipsam possimus quos. Tempora laboriosam ipsum minus voluptates alias! Quos consectetur iure inventore, dignissimos harum sed eveniet alias. Ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, tempora natus! Modi quae debitis ipsa et, enim voluptatibus expedita, dolores nemo dicta quisquam animi aliquid similique officia laboriosam asperiores voluptatem?</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum commodi ipsam possimus quos. Tempora laboriosam ipsum minus voluptates alias! Quos consectetur iure inventore, dignissimos harum sed eveniet alias. Ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, tempora natus! Modi quae debitis ipsa et, enim voluptatibus expedita, dolores nemo dicta quisquam animi aliquid similique officia laboriosam asperiores voluptatem?</p>
    </div>
    <Footer/>
    </>
  )
}

export default DefaultPage