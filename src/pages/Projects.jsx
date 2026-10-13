import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero page-hero">
        <div className="projects-hero-content page-hero-content">
          <h1>Projects</h1>
        </div>
      </section>
      <section className="page projects-content">
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
