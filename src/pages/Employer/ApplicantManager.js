import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployerHome.css";

const ApplicantManager = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const applicants = [
    {
      id: 1,
      name: "Jean-Paul N.",
      role: "Node Dev",
      match: 95,
      location: "Kigali, RW",
      appliedDate: "2h ago",
      skills: ["Node.js", "AWS", "Redis"],
      initial: "JP",
      status: "New",
    },
    {
      id: 2,
      name: "Alice U.",
      role: "UI Designer",
      match: 88,
      location: "Rubavu, RW",
      appliedDate: "5h ago",
      skills: ["Figma", "UI/UX", "Prototyping"],
      initial: "AU",
      status: "Shortlisted",
    },
  ];

  return (
    <div className="employer-page-wrapper">
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
            <Link to="/employer-dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/employer/post-job" className="nav-link">
              Post a Job
            </Link>
            <Link to="/employer/manage-applicants" className="nav-link active">
              Applicants
            </Link>
          </div>
          <button className="logout-text-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="employer-wrapper">
        {/* INNOVATIVE HEADER SECTION */}
        <header className="masterpiece-header">
          <div className="header-content">
            <h1>
              Talent <span className="highlight">Acquisition</span>
            </h1>
            <p>
              Optimize your hiring funnel with AI-powered matching and
              streamlined review processes.
            </p>
          </div>

          <div className="funnel-summary">
            <div className="funnel-box">
              <span className="funnel-num">156</span>
              <span className="funnel-label">In Review</span>
            </div>
            <div className="funnel-box highlight-blue">
              <span className="funnel-num">24</span>
              <span className="funnel-label">Interviews</span>
            </div>
            <div className="funnel-box">
              <span className="funnel-num">08</span>
              <span className="funnel-label">Offers</span>
            </div>
          </div>
        </header>

        {/* SEARCH & ADVANCED FILTERS */}
        <div className="manager-controls-glass">
          <div className="search-wrapper">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, skill, or role..."
            />
          </div>
          <div className="filter-actions">
            <div className="toggle-group">
              <button
                className={`toggle-btn ${filter === "All" ? "active" : ""}`}
                onClick={() => setFilter("All")}
              >
                All Candidates
              </button>
              <button
                className={`toggle-btn ${filter === "Shortlisted" ? "active" : ""}`}
                onClick={() => setFilter("Shortlisted")}
              >
                Shortlisted
              </button>
            </div>
            <button className="export-btn">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              CSV
            </button>
          </div>
        </div>

        {/* REINVENTED CANDIDATE CARDS */}
        {/* CANDIDATE GRID - Three columns in a row */}
        <div className="candidate-grid-compact-masterpiece">
          {applicants.map((app) => (
            <div key={app.id} className="candidate-card-sleek-mini">
              <div className="card-header-mini">
                <div className="avatar-stack-mini">
                  <div className="avatar-squircle-mini">{app.initial}</div>
                  <span
                    className={`status-dot-mini ${app.status.toLowerCase()}`}
                  ></span>
                </div>
                <div className="match-indicator-mini">
                  <svg className="match-circle-mini" width="36" height="36">
                    <circle className="ring-bg" cx="18" cy="18" r="16" />
                    <circle
                      className="ring-fill"
                      cx="18"
                      cy="18"
                      r="16"
                      style={{
                        strokeDashoffset: 100 - (100 * app.match) / 100,
                      }}
                    />
                  </svg>
                  <span className="match-val-mini">{app.match}%</span>
                </div>
              </div>

              <div className="card-body-mini">
                <h3>{app.name}</h3>
                <p className="location-text">
                  {app.location} • {app.appliedDate}
                </p>

                <div className="targeting-box">
                  <label>ROLE</label>
                  <strong>{app.role}</strong>
                </div>

                <div className="skills-row-mini">
                  {app.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="skill-tag-mini">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-footer-mini">
                <button className="btn-icon-equal" title="View Dossier">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </button>
                <button className="btn-action-equal">Schedule Interview</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ApplicantManager;
