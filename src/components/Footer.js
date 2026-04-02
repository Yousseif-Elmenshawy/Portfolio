// src/components/Footer.js
import "../App.scss";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Yousseif Elshenawy. All rights reserved.
        </p>
        <div className="footer-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+201550610833"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/yousseif-elshenawy-989442380/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BECQx6%2Bm3Sgqr%2F6UraMKW7w%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
