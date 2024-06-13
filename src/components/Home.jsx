import Type from "./Type.jsx";
import homeImage from "../assets/home-image.svg";
import aboutImage from "../assets/about-image.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <section className="home-section">
        <div className="home-left">
          <h1 className="home-heading">
            Hi! <span className="wave">👋🏻</span>
          </h1>
          <h1 className="home-heading-name">
            I&apos;M <strong className="strong">FARID RASHIDOV</strong>
          </h1>
          <div className="home-typewriter">
            <Type className="type " />
          </div>
        </div>
        <div className="home-right">
          <img src={homeImage} className="home-image-right" />
        </div>
      </section>
      {/* About Section */}
      <section className="home-about-section">
        <div className="home-about-description">
          <h1 className="home-about-description-header">
            LET ME <strong className="strong">INTRODUCE</strong> MYSELF
          </h1>
          <p className="home-about-body">
            As a proactive learner, I am excited to keep up with the latest
            industry trends and technologies, constantly refining my skills to
            stay at the forefront of modern web development practices. <br />
            <br />I have enough knowledge about{" "}
            <strong className="strong-description">
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
        <div className="home-about-image-div">
          <img src={aboutImage} className="home-about-image" />
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact">
        <div className="contact-body">
          <h1>
            CONTACT <strong className="strong-description">ME</strong> ON
          </h1>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/frashidov/">
              <FaLinkedinIn className="contact-icon" />
            </a>
            <a href="https://www.instagram.com/faridrashidov.jpg/">
              <FaInstagram className="contact-icon  " />
            </a>
            <a href="https://github.com/imrashidov/">
              <FaGithub className="contact-icon" />
            </a>
            <a href="mailto: frashidov@gmail.com">
              <MdEmail className="contact-icon" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
