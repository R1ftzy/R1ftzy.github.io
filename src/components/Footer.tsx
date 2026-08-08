import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 R1FTZY{" "}
      </p>

      <div className="footer-socials">
        <a
          href="https://linkedin.com/in/ronik-baul"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/R1ftzy"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:r1ftzyplays@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;