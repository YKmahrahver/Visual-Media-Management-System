import React from 'react'
import './auth.css'

export default function Login() {
  return (
    <div className="auth-container">
      <h2 style={{color:'white'}}>Log In</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
        <button className="google-btn">Log in with Google</button>
      </form>
      <p>Don't have an account? <a style={{color:'blueviolet'}} href="/signup">Sign up</a></p>
    </div>
  )
}