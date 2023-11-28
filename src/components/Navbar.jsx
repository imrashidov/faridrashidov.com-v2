import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="nav-main flex justify-between items-center px-60 w-full py-4 ">
      <a href="/" className="flex-shrink-0 ">
        <img className="nav-logo w-40 " src={logo} alt="Logo" />
      </a>
      <div className="nav-items flex gap-32">
        <div className="nav-item">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/resume">Resume</NavLink>
        </div>
      </div>
    </div>
  );
}
