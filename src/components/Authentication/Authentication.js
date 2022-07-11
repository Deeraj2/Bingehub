import React from 'react';
import './Authentication.css';
import Login from './Login/Login';
import firebase from 'firebase/compat/app';

function Authentication({setAlert}) {

  const googleProvider = new firebase.auth.GoogleAuthProvider()

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(googleProvider).then((res)=>{
      setAlert({
        open: true,
        message: `Sign Up Successfull. Welcome ${res.user.email}`,
        type: "success"
      })
    }).catch((error)=>{
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      })
    })
  }

  return (
    <div className='bg-photo'>
      <div className='auth-gradient' />
        <div className='auth-form'>
          <Login setAlert={setAlert} signInWithGoogle={signInWithGoogle} />
        </div>
    </div>
  )
}

export default Authentication