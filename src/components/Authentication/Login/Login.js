import React, { useState } from 'react';
import Signup from '../Signup/Signup';
import GoogleButton from 'react-google-button';
import './Login.css';
import { auth } from '../../firebase/firebase';

function Login({setAlert, signInWithGoogle}) {
  const [userData, setUserData] = React.useState({
        email: '',
        password: ''
    })
  
  const [signUp, setSignUp] = useState(false)
  
  const handleSubmit = async() =>{
    if(!userData.email || !userData.password){
      setAlert({
        open: true,
        message: 'Please fill all the fields',
        type: "error"
      })
      return;
    }
    try {
      const result = await auth.signInWithEmailAndPassword(userData.email, userData.password)

      setAlert({
        open: true,
        message: `Login In Successful.Welcome ${result.user.email}` 
      })
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  }
  
  
  return (
    <div>
    {
      signUp ? (
          <Signup setSignUp={setSignUp} setAlert={setAlert} signInWithGoogle={signInWithGoogle} />
      ) : (
        <div className='login'>
          <h1>Login In</h1>
          <input type="email" placeholder='Email' value={userData.email} onChange={(e)=>setUserData({...userData, email: e.target.value})} />
          <input type="password" placeholder='Password' value={userData.password} onChange={(e)=>setUserData({...userData, password: e.target.value})} />
          <button className='login-btn' onClick={handleSubmit} >Login</button>
          <div className='container'>
            <span className='line1'></span>
            <span className='or'>Or</span>
            <span className='line2'></span>
          </div>
          <GoogleButton style={{ width: "100%", outline: "none", borderRadius: "5px" }} onClick={signInWithGoogle} />
          <h4>
            <span className='login-gray'>New to BingeHub? </span>
            <span className='login-link' onClick={()=> setSignUp(true)} >Sign Up now</span>
          </h4>
        </div>
      )
    }
    </div>
  )
}

export default Login