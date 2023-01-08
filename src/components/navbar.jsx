import userEvent from "@testing-library/user-event";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { to: "/", label: "Home" },
    { to: "/users", label: "Users" },
  ];
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Links.map((link) => (
              <li className="nav-item" key={link.label}>
                <Link
                  className={
                    pathname === link.to ? "nav-link-active" : "nav-link"
                  }
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
