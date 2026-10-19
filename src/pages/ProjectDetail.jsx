import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectSummary from "../components/ProjectSummary";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="page">
        <h1>Project not found</h1>
        <Link to="/projects">← Back to all projects</Link>
      </section>
    );
  }

  return (
    <section className="page project-detail">
      <Link to="/projects">← Back to all projects</Link>
      <div className="project-subteams">
        <span className="project-subteams-label">Subteams:</span>
        <div className="categories">
          {project.categories.map((category) => (
            <Link
              key={category}
              to={`/projects?category=${encodeURIComponent(category)}`}
              className="tag category-link"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
      <figure className="project-detail-image">
        <img src={project.image} alt={project.title} />
        {project.image_caption && <figcaption>{project.image_caption}</figcaption>}
      </figure>
      <h1>{project.title}</h1>
      {project.status === "completed" && (
        <div><span className="tag project-status-tag">Completed</span></div>
      )}
      <ProjectSummary summary={project.summary} />
    </section>
  );
}
