import React from "react";
import { NavLink } from "react-router-dom"; // Could also use Link but NavLink better for user visibility
import "../styles/Header.css";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <>
    <header className="header">
      <img src={logo} alt="LMS Logo" className="img" />
      <h1>LMS - Learning Management System</h1>
      </header>
      
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </>
  );
};

export default Header;