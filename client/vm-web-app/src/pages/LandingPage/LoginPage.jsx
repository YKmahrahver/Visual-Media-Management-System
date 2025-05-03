import React from 'react'
import './auth.css'
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [values, setValues] = useState({     
      email: "",
      password: "",
    });

  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8081/api/auth/login', {
        email: values.email,
        password: values.password
      });

      // Log success or do something with the response, like redirecting
      console.log("Login Success: ", response.data); // Success message

      // Optionally redirect to login after successful signup
      window.location.href = '/main';
      
    } catch (error) {
      // Handle any errors, such as email already taken
      console.error("Login Failed:", error.response?.data?.message);
      setError(error.response?.data.message || "Login failed. Please try again.");
    }
  };
  return (
    <div className="auth-container">
      {error && <p className="error-message">{error}</p>}
      <h2 style={{color:'white'}}>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required 
          onChange={(e) => setValues({...values, email: e.target.value})}/>
        <input type="password" placeholder="Password" required 
          onChange={(e) => setValues({...values, password: e.target.value})}/>
        <button type="submit">Log In</button>
        <button className="google-btn">Log in with Google</button>
      </form>
      
      <p>Don't have an account? <a style={{color:'blueviolet'}} href="/signup">Sign up</a></p>
    </div>
  )
}
