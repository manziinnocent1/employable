import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGlobe, FaArrowRight } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          RW-<span>JOBS</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/jobs">Find Jobs</Link>
        </li>
        <li>
          <Link to="/companies">Companies</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="nav-actions">
        <button className="lang-toggle">
          <FaGlobe /> RW | EN
        </button>
        {/* The New Innovative Entry Point */}
        <button className="btn-get-started" onClick={() => navigate("/auth")}>
          Get Started <FaArrowRight />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
