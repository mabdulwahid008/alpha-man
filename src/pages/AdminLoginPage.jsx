import React from 'react'
import Header from '../components/header/Header'
import Login from '../components/login/Login'

function AdminLoginPage(props) {
  return (
    <div>
       <Login setAuthorization={props.setAuthorization}/>
    </div>
  )
}

export default AdminLoginPage