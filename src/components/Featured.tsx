import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Featured() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="featured" className="featured">
      <h1>projects</h1>

      <div className="featured-scroll">
        {featured.map((project, i) => (
          <ProjectCard key={`${project.title}-${i}`} project={project} />
        ))}
      </div>
    </section>
  );
}
