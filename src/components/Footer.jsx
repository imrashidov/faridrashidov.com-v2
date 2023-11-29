import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer w-full absolute bottom-0 bg-footer py-4 ">
      <div className="footer-content mx-20 grid grid-cols-1 grid-rows-1 md:flex justify-between gap-3 ">
        <div className="footer-copyright font-semibold !text-center w-full ">
          Designed and Developed by Farid Rashidov
        </div>
        <div className="footer-copyright flex justify-center  font-semibold w-full">
          Copyright © 2023
        </div>
        <div className="footer-social-media flex justify-center items-center gap-6 w-full">
          <a href="https://www.linkedin.com/in/frashidov/">
            <FaLinkedinIn className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/faridrashiidov/">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://github.com/imrashidov/">
            <FaGithub className="footer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
