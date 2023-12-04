import React from "react";
import Type from "./Type.jsx";
import homeImage from "../assets/home-image.svg";
import aboutImage from "../assets/about-image.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <section>
      {/* Home Section */}
      <div className="home-content  px-80  pt-28 h-full flex justify-between">
        <div className="home-left pt-52 w-full text-center  ">
          <h1 className="home-heading text-4xl font-semibold pb-4 ">
            Hi! <span className="wave">👋🏻</span>
          </h1>
          <h1 className="heading-name text-4xl font-semibold">
            I'M{" "}
            <strong className="strong text-violet-700 font-semibold">
              FARID RASHIDOV
            </strong>
          </h1>
          <div className="typewriter pt-20 text-violet-700 text-4xl font-semibold">
            <Type />
          </div>
        </div>
        <div className="home-right flex-shrink-0 ">
          <img src={homeImage} className="w-[600px] h-[600px] " />
        </div>
      </div>
      {/* About Section */}
      <div className="about px-80 py-24">
        <div className="about-container flex pt-20">
          <div className="about-description font-semibold ">
            <h1 className="about-description-header text-center text-5xl ">
              LET ME{" "}
              <strong className="strong text-violet-700 font-semibold">
                INTRODUCE
              </strong>{" "}
              MYSELF
            </h1>
            <p className="about-body mt-10 text-lg  ">
              As a proactive learner, I am excited to keep up with the latest
              industry trends and technologies, constantly refining my skills to
              stay at the forefront of modern web development practices. <br />
              <br />I have enough knowledge about{" "}
              <strong className="strong-description  ">
                HTML, CSS, JavaScript and React
              </strong>{" "}
              <br />
              <br />I am an experienced{" "}
              <strong className="strong-description">
                Front-End Developer
              </strong>{" "}
              with expertise in the{" "}
              <strong className="strong-description">
                MERN (MongoDB, Express.js, React, Node.js) Stack
              </strong>{" "}
              . With my self-study experience over a long period of time, I
              immersed myself in the world of{" "}
              <strong className="strong-description">Web Development</strong>,
              contributing to various projects and honing my skills in creating
              engaging and user-friendly applications.
            </p>
          </div>
          <div className="about-avatar flex-shrink-0 ">
            <img src={aboutImage} className="w-[600px] h-[450px] " />
          </div>
        </div>
        <div className="contact">
          <div className="contact-body flex flex-col justify-center items-center gap-4 text-4xl font-semibold py-10">
            <h1>
              CONTACT <strong className="strong-description">ME</strong> ON
            </h1>
            <div className="contact-icons flex gap-10 ">
              <a href="https://www.linkedin.com/in/frashidov/">
                <FaLinkedinIn className="contact-icon" />
              </a>
              <a href="https://www.instagram.com/faridrashiidov/">
                <FaInstagram className="contact-icon  " />
              </a>
              <a href="https://github.com/imrashidov/">
                <FaGithub className="contact-icon" />
              </a>
              <a href="mailto: contact@faridrashidov.com">
                <MdEmail className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
