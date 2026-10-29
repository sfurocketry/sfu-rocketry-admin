import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        className="project-card-image-link"
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
      >
        <img src={project.image} alt={project.title} loading="lazy" />
      </Link>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p className="project-card-categories">{project.categories.join(", ")}</p>
        {project.cardDescription && <p className="project-card-description">{project.cardDescription}</p>}
        <Link to={`/projects/${project.slug}`}>Read more ↗</Link>
      </div>
    </article>
  );
}
