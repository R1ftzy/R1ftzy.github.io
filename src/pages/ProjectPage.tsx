import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectPage() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <main className="project-page">
      <ProjectCard project={project} />

      <section className="project-details">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </section>
    </main>
  );
}

export default ProjectPage;