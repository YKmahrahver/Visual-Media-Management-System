import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landingpage.jsx';
import Howitworks from './pages/LandingPage/howitworks.jsx';
import FAQ from './pages/LandingPage/FAQ.jsx';
import Login from './pages/LandingPage/LoginPage.jsx';
import SignUp from './pages/LandingPage/SignupPage.jsx';
  

function App() {
  return(<>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/howitworks" element={<Howitworks />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/LogIn" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </>)
}

export default App
