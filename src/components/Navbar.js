import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="nav-logo">
        Greeshma<span className="logo-dot">.</span>
      </h2>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
