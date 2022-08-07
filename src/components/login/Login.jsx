import React, { useContext, useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import context from '../../context/context';
import './Login.css'

function Login(props) {
    const contextApi = useContext(context);
    const { login } = contextApi;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e)=>{
        setUsername(e.target.value)
    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value)
    }
    
    const [errorMsg, setErrorMsg] = useState('');
    const navigat = useNavigate();
    const onSubmit = async(e)=>{
        e.preventDefault();
        const response = await login(username, password);
        if(response.message){
            setErrorMsg(response.message)
            document.getElementById('error-msg').style.display = 'flex'
            setTimeout(() => {
                document.getElementById('error-msg').style.display = 'none'
            }, 5000);
        }
        if(response.token){
            console.log(response.token);
            // document.cookie = 'token = ' + response.token
            localStorage.setItem('token', response.token)
            // navigat('/dashboard');
            props.setAuthorization(true)
        }
        
    }

  return (
   <div className="login">
       <div className="form">
           <h2>Login</h2>
           <form onSubmit={onSubmit}>
               <div>
                    <label>Username</label>
                    <input type="text" value={username} name='username' onChange={onChangeUsername}/>
               </div>
               <div>
                    <label>Password</label>
                    <input type="password" value={password} name='username' onChange={onChangePassword}/>
               </div>
               <button className="btn login-btn">Log In</button>
               <div className='error-msg'id='error-msg'>
                    <p>{errorMsg}</p>
                    <i className="fa-solid fa-circle-xmark" onClick={()=>{document.getElementById('error-msg').style.display = 'none'}}></i>
               </div>
           </form>
       </div>
   </div>
  )
}

export default Login