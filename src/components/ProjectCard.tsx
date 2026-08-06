import type { Project } from "../data/projects";
import { FaGithub } from "react-icons/fa6";
type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.video ? (
        <video autoPlay muted loop playsInline className="project-preview">
          <source src={project.video} type="video/mp4" />
        </video>
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-preview"
        />
      ) : null}

      <div className="project-content">
        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="tech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} strokeWidth={2} /> GitHub
          </a>

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
