import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import { RiHome3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

const navDropdown = {
  open: { translateY: 0 },
  closed: { translateY: -300 },
};

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    if (isActive === false) {
      setIsActive(true);
    } else {
      setIsActive(false);
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
  ];

  return (
    <header className={navbar ? "updated-navbar" : "navbar"}>
      <div className="nav-main">
        <div className="nav-icon">
          <a href="/">
            <img className="nav-logo" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-menu" onClick={handleMenuToggle}>
          <NavbarButton isOpen={isActive} />
        </div>
        <motion.ul
          className="nav-items"
          animate={isActive ? navDropdown.open : navDropdown.closed}
          transition={{ duration: 0.3 }}
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
        </motion.ul>
      </div>
    </header>
  );
}
