import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const ongoingProjects = projects.filter((project) => project.status === "ongoing");
  const completedProjects = projects.filter((project) => project.status === "completed");

  return (
    <div className="projects-page">
      <section className="projects-hero page-hero">
        <div className="projects-hero-content page-hero-content">
          <h1>Projects</h1>
        </div>
      </section>
      <section className="page projects-content">
        <section className="project-group" aria-labelledby="ongoing-projects-heading">
          <h2 id="ongoing-projects-heading">Ongoing Projects</h2>
          <div className="project-grid">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
        {completedProjects.length > 0 && (
          <>
            <hr className="project-section-separator" />
            <section className="project-group completed-project-group" aria-labelledby="completed-projects-heading">
              <h2 id="completed-projects-heading">Completed Projects</h2>
              <div className="project-grid">
                {completedProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  );
}
