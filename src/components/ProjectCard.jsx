import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="project-card-body">
        <div className="categories">
          {project.categories.map((c) => (
            <span key={c} className="tag">{c}</span>
          ))}
          {project.status === "completed" && (
            <span className="tag project-status-tag">Completed</span>
          )}
        </div>
        <h3>{project.title}</h3>
        <ProjectSummary summary={project.summary} compact />
        <Link to={`/projects/${project.slug}`}>Read more →</Link>
      </div>
    </article>
  );
}
