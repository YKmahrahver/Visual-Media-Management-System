import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landingpage.jsx';
import Howitworks from './pages/LandingPage/howitworks.jsx';
import FAQ from './pages/LandingPage/FAQ.jsx';
import Login from './pages/LandingPage/LoginPage.jsx';
import SignUp from './pages/LandingPage/SignupPage.jsx';
import MainPage from './MainPage/main.jsx';
import UserDashboard from './MainPage/dashboard.jsx';
import MediaList from './MainPage/mediaList.jsx';
import AddNewEntry from './MainPage/addnew.jsx';
import Settings from './MainPage/settings.jsx'; 
  

function App() {
  return(<>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/howitworks" element={<Howitworks />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/LogIn" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/main" element={<MainPage />}>
        <Route path="user-dashboard" element={<UserDashboard />} />
        <Route path="user-media-list" element={<MediaList />} />
        <Route path="user-add-new-entry" element={<AddNewEntry />} />
        <Route path="user-settings" element={<Settings />} />
      </Route>
    </Routes>
  </>)
}

export default App
