import React, { useState } from 'react'
//  import './Auth.css'

import Signup from './signup'
import { Link,useNavigate } from 'react-router-dom';

function Login() {

const [email, setemail]= useState("")
const [password,setpassword] = useState("")
const navigate = useNavigate()



async function handlelogin(e) {
     e.preventDefault();
  const logindata = {email,password}
    const res = await fetch("http://localhost:5000/api/auth/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logindata),
      credentials: "include"  
    });
     if (!res.ok) {
    alert(data.message || "Invalid email or password");
    return;
  }
  const data = await res.json();
  console.log(data);
  navigate('/home')
    
}


  return (
   <>
   
<div className='body'>
  <div className="auth-wrapper">

      <div className="left">
        <h1>Welcome Back!</h1>
        <p>Login to continue</p>
      </div>

      <div className="right">
        <h2>Login</h2>

        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email Address" />
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />

        <button onClick={handlelogin}>Login</button>

        <p className="switch">
          Don’t have an account? <Link to="/">Signup</Link>
       
        </p>
      </div>
    </div>
</div>
   
   </>
  )
}

export default Login
