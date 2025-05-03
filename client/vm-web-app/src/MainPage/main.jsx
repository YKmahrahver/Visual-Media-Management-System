// MainPage.jsx
import React from "react";
import logo from './../assets/g4142.png'; 
import './main.css'; // Import the CSS file for styling
import { NavLink, Outlet } from 'react-router-dom'; // Import Link for navigation and Outlet for rendering nested routes
import dashboardlogo from './../assets/dashboard.png'; 
import settingslogo from './../assets/settings.png';
import addlogo from './../assets/addnew.png';
import medialogo from './../assets/medialist.png';
import { useState } from "react";
import userlogo from './../assets/user.jpg'; // Import user logo


export default function MainPage() {
  const [username, setUsername] = useState("Username"); // State to hold the username
  return (
    <div className="main-page">    
      <div className="nav-bar-container">
        <div className="navbar_MP_logo">
          <img className="logopng1" src={logo} alt="Logo" />
          GeekShelf
        </div>
        <div className="navbar_MP_user_container">
          <div className="navbar_MP_username">Welcome!</div>
          <img className="logopng2" src={userlogo} alt="Logo" />
          <div className="navbar_MP_username" style={{fontSize:"13px"}}>{username}</div>
        </div>
        <div className="navbar_links">
          <NavLink to="user-dashboard" className="mainpagelogos" activeClassName="active">
            <img className="logopng" src={dashboardlogo} alt="Logo" />Dashboard
          </NavLink>
          <NavLink to="user-media-list" className="mainpagelogos" activeClassName="active">
            <img className="logopng" src={medialogo} alt="Logo" />My Media List
          </NavLink>
          <NavLink to="user-add-new-entry" className="mainpagelogos" activeClassName="active">
            <img className="logopng" src={addlogo} alt="Logo" />Add New Entry
          </NavLink>
          <NavLink to="user-settings" className="mainpagelogos" activeClassName="active">
            <img className="logopng" src={settingslogo} alt="Logo" />Settings
          </NavLink>
        </div>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
