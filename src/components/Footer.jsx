import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-copyright">
          Designed and Developed by Farid Rashidov
        </div>
        <div className="footer-copyright">Copyright © 2023</div>
        <div className="footer-social-media">
          <a href="https://www.linkedin.com/in/frashidov/">
            <FaLinkedinIn className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/faridrashiidov/">
            <FaInstagram className="footer-icon  " />
          </a>
          <a href="https://github.com/imrashidov/">
            <FaGithub className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
