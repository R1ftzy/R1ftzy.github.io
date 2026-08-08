import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const MIN_PROJECTS = 8;

  const emptyCards = Math.max(0, MIN_PROJECTS - projects.length);
  return (
    <section id="projects" className="projects">
      <h1>projects.</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        {Array.from({ length: emptyCards }).map((_, i) => (
          <div key={`empty-${i}`} className="project-card--empty" />
        ))}
      </div>
    </section>
  );
}

export default Projects;
