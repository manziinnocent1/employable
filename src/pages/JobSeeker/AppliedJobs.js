import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobSeeker.css";

const AppliedJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="seeker-page-wrapper">
      <nav className="top-nav">
        <div className="nav-container">
          <div
            className="nav-logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            RW-<span>JOBS</span>
          </div>
          <div className="nav-links">
            <Link to="/seeker-dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/seeker/applied" className="nav-link active">
              Applications
            </Link>
            <Link to="/seeker/profile" className="nav-link">
              Profile
            </Link>
          </div>
          <button className="logout-text-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="seeker-wrapper">
        <header className="seeker-header-innovative">
          <div className="header-content">
            <h1>
              My <span className="highlight">Career Journey</span>
            </h1>
            <p className="page-description">
              Manage your professional momentum. Here you can track every step
              of your application process, from the initial interest to the
              final offer.
            </p>
          </div>

          {/* Innovative Summary Bar */}
          <div className="journey-summary">
            <div className="summary-item">
              <span className="count">08</span>
              <span className="label">Total Apps</span>
            </div>
            <div className="summary-sep"></div>
            <div className="summary-item">
              <span className="count">02</span>
              <span className="label">Interviews</span>
            </div>
          </div>
        </header>

        {/* Search and Filters */}
        <div className="filter-container-sleek">
          <input
            type="text"
            placeholder="Search companies or roles..."
            className="sleek-search"
          />
          <div className="filter-chips">
            <button className="chip active">All</button>
            <button className="chip">Interviews</button>
            <button className="chip">Pending</button>
          </div>
        </div>

        <div className="timeline-innovative">
          <div className="timeline-line"></div>

          {/* Item 1 - Today */}
          <div className="timeline-entry">
            <div className="entry-marker">
              <div className="dot-outer">
                <div className="dot-inner"></div>
              </div>
              <span className="entry-date">TODAY</span>
            </div>
            <div className="entry-card shadow-blue">
              <div className="card-main-info">
                <div className="comp-logo">BK</div>
                <div className="text-group">
                  <h4>Bank of Kigali</h4>
                  <p>Fullstack Engineer</p>
                </div>
                <span className="status-badge blue-lite">Pending Review</span>
              </div>
              <div className="card-footer-action">
                <p>Applied via RW-JOBS Portal</p>
                <button className="text-action-btn">View Details</button>
              </div>
            </div>
          </div>

          {/* Item 2 - 2 Days Ago */}
          <div className="timeline-entry highlight-entry">
            <div className="entry-marker">
              <div className="dot-outer">
                <div className="dot-inner pulse"></div>
              </div>
              <span className="entry-date">2 DAYS AGO</span>
            </div>
            <div className="entry-card shadow-orange">
              <div className="card-main-info">
                <div className="comp-logo logo-vw">VW</div>
                <div className="text-group">
                  <h4>Volkswagen Rwanda</h4>
                  <p>Systems Analyst</p>
                </div>
                <span className="status-badge orange-lite">Interviewing</span>
              </div>
              <div className="card-extra-content">
                <div className="reminder-box">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span>Prepare: Review Systems Design basics</span>
                </div>
              </div>
              <div className="card-footer-action">
                <p>Scheduled for Oct 25, 10:00 AM</p>
                <button className="action-btn-primary">Join Call</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppliedJobs;
