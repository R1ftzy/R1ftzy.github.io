import { getAge } from "../utils/age";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>hi, I'm Ronik.</h1>

        <p className="hero-subtitle">
          {getAge(new Date(2007, 10, 13))} y/o developer from India.
        </p>

        <p style={{ marginLeft: "1px", fontSize: "0.9rem", color: "#b2c4aa" }}>
          computer science @ IIIT Guwahati
        </p>

        <p>
          I love computer graphics, low-level programming and building cool shi I find fun.
        </p>

        <div className="hero-links">
          <a
            href="https://github.com/R1ftzy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} strokeWidth={2} />
          </a>

          <a
            href="https://linkedin.com/in/ronik-baul/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
