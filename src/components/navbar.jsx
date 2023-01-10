import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/authContext";

const Navbar = () => {
  const Links = [
    { to: "/", label: "Home" },
    { to: "/users", label: "Users" },
    { to: "/table", label: "Table" },
  ];
  const { pathname } = useLocation();
  const { user, Logout } = useContext(AuthContext);
  if (!user) return null;
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
                    pathname === link.to ? "nav-link active" : "nav-link"
                  }
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="navbar-nav d-flex">
          <li className=" nav-item">
            <Link className="nav-link" onClick={Logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
