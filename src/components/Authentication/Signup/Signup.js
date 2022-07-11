import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import { auth } from '../../firebase/firebase';
import './Signup.css';

function Signup({setSignUp, setAlert, signInWithGoogle}) {
  const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
  })

  const handleSubmit = async() => {
    if(userData.password !== userData.confirmPassword){
      setAlert({
        open: true,
        message: 'Password Do Not Match',
        type: 'error'
      });
      return
    }
    try {
      const result = await auth.createUserWithEmailAndPassword(userData.email, userData.password)
      console.log(result)

      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`
      })
    } catch (error) {
      setAlert({
                open: true,
                message: error.message,
                type: "error",
            });
            return
    }
  }



  return (
    <div className='signup'>
      <h1>Sign Up</h1>
          <input type="email" placeholder='Email' value={userData.email} onChange={(e)=>setUserData({...userData, email: e.target.value})} />
          <input type="password" placeholder='Password' value={userData.password} onChange={(e)=>setUserData({...userData, password: e.target.value})} />
          <input type="password" placeholder='Confirm Password' value={userData.confirmPassword} onChange={(e)=>setUserData({...userData, confirmPassword: e.target.value})} />
          <button className='login-btn' onClick={handleSubmit} >SignUp</button>
          <div className='container'>
            <span className='line1'></span>
            <span className='or'>Or</span>
            <span className='line2'></span>
          </div>
          <GoogleButton style={{ width: "100%", outline: "none", borderRadius: "5px", marginBottom: "20px" }} onClick={signInWithGoogle} />
        <h4>
            <span className='login-gray'>Already have an account? </span>
            <span className='login-link' onClick={()=> setSignUp(false)} >Login</span>
          </h4>
    </div>
  )
}

export default Signup