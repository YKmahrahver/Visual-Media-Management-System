import React, { useState } from "react";
import './auth.css';
import axios from "axios";

export default function SignupPage() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // To store error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the error state before trying the request
    setError("");

    try {
      // Send POST request to the backend with json data
      const response = await axios.post('http://localhost:8081/api/auth/signup', {
        username: values.username,
        email: values.email,
        password: values.password
      });

      // Log success or do something with the response, like redirecting
      console.log(response.data); // Success message

      // Optionally redirect to login after successful signup
      window.location.href = '/login';

    } catch (error) {
      // Handle any errors, such as email already taken
      console.error("Error registering the user:", error.response.data.message);
      setError(error.response?.data.message || "An error occurred");
    }
  }

  return (
    <div className="auth-container">
      {error && <p className="error-message">{error}</p>}
      <p>Join GeekShelf now!</p>
      <h2 style={{ color: 'white' }}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type="submit">Create Account</button>
        <button className="google-btn">Sign up with Google</button>
      </form>

      {/* Display any error message */}
      

      <p>Already have an account? <a style={{ color: 'blueviolet' }} href="/login">Log in</a></p>
    </div>
  );
}
