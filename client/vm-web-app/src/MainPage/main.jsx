// MainPage.jsx
import React from "react";
import logo from './../assets/g4142.png'; 
import './main.css'; // Import the CSS file for styling
import { Link, Outlet } from 'react-router-dom'; // Import Link for navigation and Outlet for rendering nested routes

export default function MainPage() {
  return (
    <div className="main-page">    
      <div className="nav-bar-container">
        <div className="navbar_LP_logo"><img className="logopng" src={logo} alt="Logo" />GeekShelf</div>
        <div className="navbar_links">
          <Link to="user-dashboard">Dashboard</Link>
          <Link to="user-media-list">My Media List</Link>
          <Link to="user-add-new-entry">Add New Entry</Link>
          <Link to="user-settings">Settings</Link>
        </div>
      </div>

      {/* Outlet here will render the nested route content */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
