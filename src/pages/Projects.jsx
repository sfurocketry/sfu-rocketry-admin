import { Link, useSearchParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.categories.includes(selectedCategory))
    : projects;
  const ongoingProjects = filteredProjects.filter((project) => project.status === "ongoing");
  const completedProjects = filteredProjects.filter((project) => project.status === "completed");

  return (
    <div className="projects-page">
      <section className="projects-hero page-hero">
        <div className="projects-hero-content page-hero-content">
          <h1>Projects</h1>
          {selectedCategory && (
            <p className="projects-filter-label">
              Showing projects for <strong>{selectedCategory}</strong>
            </p>
          )}
        </div>
      </section>
      <section className="page projects-content">
        {filteredProjects.length === 0 ? (
          <p className="projects-empty-state">
            No projects are tagged with this subteam.
          </p>
        ) : (
          <>
            {ongoingProjects.length > 0 && (
              <section className="project-group" aria-labelledby="ongoing-projects-heading">
                <h2 id="ongoing-projects-heading">Ongoing Projects</h2>
                <div className="project-grid">
                  {ongoingProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </section>
            )}
            {completedProjects.length > 0 && (
              <>
                {ongoingProjects.length > 0 && <hr className="project-section-separator" />}
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
          </>
        )}
        {selectedCategory && (
          <p className="projects-filter-reset">
            <Link to="/projects">View all projects</Link>
          </p>
        )}
      </section>
    </div>
  );
}
