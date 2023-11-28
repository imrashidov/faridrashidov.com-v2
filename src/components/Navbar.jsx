import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="nav-main flex justify-between items-center px-60 w-full py-3 ">
      <a href="/" className="flex-shrink-0 ">
        <img className="nav-logo w-48" src={logo} alt="Logo" />
      </a>
      <div className="nav-items relative flex gap-24  ">
        <div className="nav-item   ">
          <NavLink to="/" className="nav-item-navlink ">
            <RiHome3Line />
            Home
          </NavLink>
        </div>
        <div className="nav-item  ">
          <NavLink to="/about" className="nav-item-navlink">
            <GoPerson />
            About
          </NavLink>
        </div>
        <div className="nav-item  ">
          <NavLink to="/projects" className="nav-item-navlink">
            <AiOutlineFundProjectionScreen /> Projects
          </NavLink>
        </div>
        <div className="nav-item ">
          <NavLink to="/resume" className="nav-item-navlink">
            <IoDocumentOutline /> Resume
          </NavLink>
        </div>
        <div className="nav-github">
          <a href="https://github.com/imrashidov">
            <FaGithub className="w-10 h-10 text-violet-900  rounded-full hover:shadow-spec hover:shadow-violet-600" />
          </a>
        </div>
      </div>
    </div>
  );
}
