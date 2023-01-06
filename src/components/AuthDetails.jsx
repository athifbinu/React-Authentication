import { onAuthStateChanged,signOut } from 'firebase/auth';
import React,{useEffect,useState} from 'react';
import {auth} from '../Firebase'

function AuthDetails() {
       const [authUser,seAuthUser]=useState(null)

       useEffect(()=>{
           const listen =onAuthStateChanged(auth,(user)=>{

            if(user) {
                seAuthUser(user)
            }else {
                seAuthUser(null);
            }

           })

            return () =>{
                listen();
            }
       }, [])

       const usersignOut = () =>{
        signOut(auth).then(()=>{
            console.log('signout Successfull')
        }).catch(error => console.log(error))
       }

  return (
    <div>
      {authUser ? <><p>{`Signed In as ${authUser.email}` }</p><button onClick={usersignOut}>Singn out</button></> : <p>Signed Out</p> }
    </div>
  )
}

export default AuthDetails
