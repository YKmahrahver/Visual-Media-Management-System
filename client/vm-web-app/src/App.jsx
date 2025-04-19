import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar_LP from './pages/LandingPage/navbar_LP.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Howitworks from './pages/LandingPage/howitworks.jsx';
import FAQ from './pages/LandingPage/FAQ.jsx';
import Login from './pages/LandingPage/LoginPage.jsx'
  

function App() {
  return(<>
    <Navbar_LP />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/howitworks" element={<Howitworks />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/LoginPage" element={<Login />} />
    </Routes>
  </>)
}

export default App
