import React from "react";
import './auth.css';
import { useState, useEffect } from "react";
import axios from "axios";

export default function SignupPage() {

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post()
  }

  return (
    <div className="auth-container">
      <p>Join GeekShelf now!</p>
      <h2 style={{color:'white'}}>Sign Up</h2>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Username" name='name' required onChange={e => setValues({...values, name: e.target.value})} />
        <input type="email" placeholder="Email" name='email' required onChange={e => setValues({...values, email: e.target.value})}/>
        <input type="password" placeholder="Password" name='password' required onChange={e => setValues({...values, password: e.target.value})}/>
        <button type="submit">Create Account</button>
        <button className="google-btn">Sign up with Google</button>
      </form>
      <p>Already have an account? <a style={{color:'blueviolet'}}href="/login">Log in</a></p>
    </div>
  );
}