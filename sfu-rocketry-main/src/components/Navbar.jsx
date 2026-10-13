import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/join", label: "Get Involved" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
  { to: "/support-us", label: "Support Us" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="SFU Rocketry" />
      </NavLink>
      <nav>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
