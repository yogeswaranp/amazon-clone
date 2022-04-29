import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import pc3 from './Image/pc3.png'
import {auth} from './firebase'


function Login(){
    const navigate = useNavigate();
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    const login=(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            // logic  
            navigate("/");
           
        })
        .catch(e=>alert(e.message));
    }
    const register=(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // logic 
            navigate("/");
        })
        .catch(e=>alert(e.message));
    }
    
    return(
        <div className="login">
           <Link to='/'>
           <img className="login_logo"
            src={pc3}
            alt="amazon_logo"/>
           </Link>
           <div className="login-container">
               <h1>Sign In</h1>
               <form>
                   <h5>E-mail</h5>
                   <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                   <h5>Password</h5>
                   <input value={password} onChange={event=>setPassword(event.target.value)} type="password"/>
                   <button onClick ={login} type ="submit" className="login-sign-button">Sign In</button>
               </form>
               <p>By Signing-in you agree to the amazon condition of use & sale.please see our privacy notice,our cookies,our internet based-ads.</p>
               <button onClick={register} className="login-register-button">Create Your Amazon Account</button>
           </div>
        </div>
    )
}
export default Login