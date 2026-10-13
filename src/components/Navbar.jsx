import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/join", label: "Get Involved" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
  { to: "/support-us", className: "btn", label: "Support Us" },
];
const imageHeroPaths = new Set(["/", "/about", "/projects", "/join", "/events", "/contact"]);

export default function Navbar({ theme, onToggleTheme }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar${imageHeroPaths.has(pathname) ? " navbar-on-hero" : ""}`}>
      <NavLink to="/" className="brand">
        <img src={`${import.meta.env.BASE_URL}images/misc/SFURocketryLogo4k-WHITE.png`} alt="SFU Rocketry" />
      </NavLink>
      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="primary-navigation" className={menuOpen ? "is-open" : ""}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${l.className ?? ""}${isActive ? " active" : ""}`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <button
          className="theme-toggle"
          type="button"
          role="switch"
          aria-checked={theme === "dark"}
          aria-label="Dark mode"
          onClick={onToggleTheme}
        >
          <span aria-hidden="true" />
          Dark mode
        </button>
      </nav>
    </header>
  );
}
