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
    if (window.scrollY >= 110) {
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
        <div className="nav-icon max-sm:bg-footer">
          <a href="/">
            <img className="nav-logo w-48" src={logo} alt="Logo" />
          </a>
        </div>
        <div
          className="nav-menu text-3xl absolute right-8 top-5 cursor-pointer md:hidden text-violet-600 "
          onClick={handleMenuToggle}
        >
          {isActive ? (
            <IoMdClose className="nav-menu-icon w-10 h-10 cursor:pointer" />
          ) : (
            <IoMenu className="nav-menu-icon w-10 h-10 cursor:pointer" />
          )}
        </div>
        <ul
          className={`nav-items gap-24 max-sm:gap-2 flex  items-center pb-0 max-sm:pb-5 max-sm:absolute static z-auto max-sm:z-[-1] max-sm:bg-footer max-sm:mt-4 max-sm:flex-col max-sm:left-0 max-sm:w-full w-auto pl-0   transition-all duration-300 ease-out  ${
            menuClass
              ? "top-19 opacity-100"
              : "max-sm:top-0 max-sm:opacity-0 max-sm:hidden"
          }`}
        >
          {Links.map((item, index) => {
            return (
              <li
                key={index}
                className=" nav-item max-xs:my-7 max-xs:flex-col pb-2 mt-2 "
              >
                <NavLink
                  className="nav-item-navlink gap-2 "
                  to={item.link}
                  onClick={handleMenuToggle}
                >
                  {item.icon} {item.name}
                </NavLink>
              </li>
            );
          })}
          <div className="nav-github ">
            <a href="https://github.com/imrashidov">
              <FaGithub className="w-10 h-10 text-violet-900  rounded-full hover:shadow-spec hover:shadow-footer" />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
