import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/join", label: "Get Involved" },
  { to: "/events", label: "Events" },
  { to: "https://www.sfurocketry.com/rocket-science", label: "Rocket Science", external: true },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        {links.map(({ to, label, external }) =>
          external ? (
            <a key={label} href={to}>{label}</a>
          ) : (
            <Link
              key={label}
              to={to}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {label}
            </Link>
          )
        )}
      </nav>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://www.linkedin.com/company/sfu-rocketry" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3.4v11.5H3.5V9Zm5.6 0h3.3v1.6h.1c.5-.9 1.6-2 3.4-2 3.6 0 4.3 2.3 4.3 5.3v6.6h-3.5v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9.1V9Z" /></svg>
          </a>
          <a href="https://www.instagram.com/sfurocketry/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2.5h9A5 5 0 0 1 21.5 7v10a5 5 0 0 1-5 4.5h-9A5 5 0 0 1 2.5 17V7a5 5 0 0 1 5-4.5Zm0 2A3 3 0 0 0 4.5 7v10a3 3 0 0 0 3 2.5h9a3 3 0 0 0 3-2.5V7a3 3 0 0 0-3-2.5h-9Zm4.5 2.2a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 2a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.5-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" /></svg>
          </a>
          <a href="https://www.facebook.com/SFURocketry/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" /></svg>
          </a>
        </div>
        <p>©2025 by SFU Rocketry</p>
      </div>
    </footer>
  );
}
