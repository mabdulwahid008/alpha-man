import React, { useContext, useEffect } from 'react'
import './Notification.css'
import { motion } from 'framer-motion'
import context from '../../context/context'

function Notification(props) {
    const  { notificationMsg } = useContext(context);
    
    const hideNotification = () =>{
        document.getElementById('notification').style.right= "-100%";
        setTimeout(() => {
            props.setNotification(false);
        }, 900);
    }

    setTimeout(() => {
        document.getElementById('notification').style.right= "-100%";
        setTimeout(() => {
            props.setNotification(false);
        }, 900);
    }, 4000);
   
  return (
    <motion.div
    initial= {{right: '-400px'}}
    animate= {{right: "15px", transition: {duration: .1, ease : "easeIn"}}}
    className="notification" id='notification'>
        <div>
        <p>{notificationMsg}</p>
        <i className='fa-solid fa-circle-xmark' onClick={hideNotification}></i>
        </div>
        <motion.span 
        initial={{width: 0}} 
        animate={{width: '100%', transition:{duration: 4, ease:'easeIn'}}}
        ></motion.span>
    </motion.div>
  )
}

export default Notification