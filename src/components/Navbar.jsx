import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    if (isActive === false) {
      setIsActive(true);
      setMenuClass(true);
    } else {
      setIsActive(false);
      setMenuClass(false);
    }
  };

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const Links = [
    { name: "Home", icon: <RiHome3Line />, link: "/" },
    { name: "About", icon: <GoPerson />, link: "/about" },
    {
      name: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
      link: "/projects",
    },
    { name: "Resume", icon: <IoDocumentOutline />, link: "/resume" },
  ];

  return (
    <div className={navbar ? "updated-navbar" : "navbar"}>
      <div className="nav-main">
        <div className="nav-icon">
          <a href="/">
            <img className="nav-logo" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-menu" onClick={handleMenuToggle}>
          {isActive ? (
            <IoMdClose className="nav-menu-icon" />
          ) : (
            <IoMenu className="nav-menu-icon" />
          )}
        </div>
        <ul
          className={`nav-items ${
            menuClass
              ? "top-14 opacity-100"
              : "max-lg:top-0 max-lg:opacity-0 max-lg:hidden"
          }`}
        >
          {Links.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <NavLink
                  className="nav-item-navlink"
                  to={item.link}
                  onClick={handleMenuToggle}
                >
                  {item.icon} {item.name}
                </NavLink>
              </li>
            );
          })}
          <div className="nav-github">
            <a href="https://github.com/imrashidov">
              <FaGithub className="nav-github-logo" />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
