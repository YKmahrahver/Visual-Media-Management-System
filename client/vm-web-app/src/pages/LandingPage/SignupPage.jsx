import React from "react";
import './auth.css';

export default function SignupPage() {
  return (
    <div className="auth-container">
      <p>Join GeekShelf now!</p>
      <h2 style={{color:'white'}}>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
        <button className="google-btn">Sign up with Google</button>
      </form>
      <p>Already have an account? <a style={{color:'blueviolet'}}href="/login">Log in</a></p>
    </div>
  );
}