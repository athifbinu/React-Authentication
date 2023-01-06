
import {signInWithEmailAndPassword} from "firebase/auth"
import React, {useState} from 'react'
import {auth} from '../../Firebase'

function Signing() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');


    const Signing = (e)=> {
         e.preventDefault();
         signInWithEmailAndPassword(auth,email,password)
         .then((userCredential)=>{
               console.log(userCredential)
         }).catch((error)=>{
            console.log(error)
         })

    }

  return (
    <div className='sign-in-container'>
        <form onSubmit={Signing}>
            <h1>Log in to your account</h1>
            <input type="email" placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 ></input> 
            <input type="password" placeholder='Enter your password'
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}

             ></input> 
                 <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default Signing
