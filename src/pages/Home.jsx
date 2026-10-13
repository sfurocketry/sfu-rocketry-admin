import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { sponsors } from "../data/sponsors";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projectTrackRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const track = projectTrackRef.current;
    if (!track) return;

    const updateControls = () => {
      setCanScrollPrev(track.scrollLeft > 1);
      setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    };

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateControls);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollProjects = (direction) => {
    const track = projectTrackRef.current;
    const firstCard = track?.querySelector(".project-card");
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="hero page-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={`${import.meta.env.BASE_URL}videos/Gen2-Hotfire-2024.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content page-hero-content">
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
        </div>
      </section>

      <section className="active-projects">
        <div className="project-carousel-heading">
          <h2>Active Projects</h2>
          <div className="project-carousel-controls" aria-label="Project navigation">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => scrollProjects(-1)}
              disabled={!canScrollPrev}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => scrollProjects(1)}
              disabled={!canScrollNext}
            >
              →
            </button>
          </div>
        </div>
        <div className="project-grid home-project-grid" ref={projectTrackRef}>
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
