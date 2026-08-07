import type { CSSProperties } from "react";
import type { Project } from "../data/projects";
import { BRANDS } from "../data/projects";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const brand = BRANDS[project.brand];

  return (
    <article
      className="cartridge"
      style={
        {
          "--accent": brand.color,
        } as CSSProperties
      }
    >
      {/* Plastic shell details */}
      <div className="cartridge-grips" />
      <div className="cartridge-notch" />
      <div className="cartridge-arrow" />

      {/* Label */}
      <div className="cartridge-label">
        {/* Cover Art */}
        <div className="cartridge-cover">
          {project.video ? (
            <video autoPlay muted loop playsInline>
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            project.image && (
              <img src={project.image} alt={project.title} />
            )
          )}

          {/* Everything sits on top of the cover */}
          <div className="cartridge-overlay">
            <header className="cartridge-header">
              <div className="cartridge-brand">
                <span>{brand.name}</span>
                <div className="brand-line" />
              </div>

              <div className="cartridge-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                )}
              </div>
            </header>

            <div className="cartridge-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <footer className="cartridge-footer">
              <div className="accent-bar">
                <div className="accent-stripes" />
              </div>

              <div className="cartridge-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;