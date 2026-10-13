import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { sponsors } from "../data/sponsors";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Igniting Innovation | Defying Gravity</h1>
        <p>
          We advance space travel technology through the development of
          innovative rocket engines, avionics systems, and general aerospace
          R&amp;D.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn">See Our Projects</Link>
          <Link to="/join" className="btn btn-outline">Get Involved</Link>
        </div>
      </section>

      <section className="active-projects">
        <h2>Active Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <Link to="/projects" className="btn">See All Projects</Link>
      </section>

      <section className="sponsors">
        <h2>Thanks to Our Supporters</h2>
        <div className="sponsor-grid">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.url ?? undefined}
              target={s.url ? "_blank" : undefined}
              rel={s.url ? "noreferrer" : undefined}
              className="sponsor-logo"
              title={s.name}
            >
              <img src={`${import.meta.env.BASE_URL}images/sponsors/${s.logo}`} alt={s.name} loading="lazy" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
