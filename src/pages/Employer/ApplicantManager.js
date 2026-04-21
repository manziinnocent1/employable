import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployerHome.css";

const ApplicantManager = () => {
  const navigate = useNavigate();
  const applicants = [
    {
      id: 1,
      name: "Jean-Paul N.",
      role: "Node Dev",
      match: "95%",
      status: "New",
      initial: "JP",
    },
    {
      id: 2,
      name: "Alice U.",
      role: "UI Designer",
      match: "88%",
      status: "Shortlisted",
      initial: "AU",
    },
  ];

  return (
    <div className="employer-page-wrapper">
      {/* TOP NAVIGATION */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-logo">
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
          <button className="logout-text-btn" onClick={() => navigate("/auth")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="employer-wrapper">
        <header className="manager-header">
          <div className="header-text">
            <h1>
              Applicant <span className="highlight">Management</span>
            </h1>
            <p>Review and shortlist the best talent for your team.</p>
          </div>
          <div className="filter-chips">
            <button className="chip active">All (12)</button>
            <button className="chip">Shortlisted</button>
            <button className="chip">Rejected</button>
          </div>
        </header>

        <div className="candidate-grid">
          {applicants.map((app) => (
            <div key={app.id} className="candidate-card innovative-shadow">
              <div className="card-top">
                <div className="candidate-avatar">{app.initial}</div>
                <div className="match-score-badge">{app.match} Match</div>
              </div>

              <div className="candidate-info">
                <h3>{app.name}</h3>
                <p className="app-role-tag">
                  Applied for: <strong>{app.role}</strong>
                </p>
              </div>

              <div className="candidate-actions">
                <button className="view-cv-btn">View CV</button>
                <button className="interview-btn">Move to Interview</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ApplicantManager;
