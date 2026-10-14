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
      <img src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      <div className="categories">
        {project.categories.map((c) => (
          <span key={c} className="tag">{c}</span>
        ))}
      </div>
      <ProjectSummary summary={project.summary} />
    </section>
  );
}
