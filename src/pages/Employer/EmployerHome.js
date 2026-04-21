import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployerHome.css";

const EmployerHome = () => {
  const navigate = useNavigate();

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
            <Link to="/employer-dashboard" className="nav-link active">
              Dashboard
            </Link>
            <Link to="/employer/post-job" className="nav-link">
              Post a Job
            </Link>
            <Link to="/employer/manage-applicants" className="nav-link">
              Applicants
            </Link>
          </div>
          {/* UPDATED LOGOUT ACTION */}
          <button className="logout-text-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="employer-wrapper">
        <header className="emp-header">
          <div className="header-text">
            <h1>
              Company <span className="highlight">Dashboard</span>
            </h1>
            <p>Welcome back! Here is your recruitment overview.</p>
          </div>
          <button
            className="prime-action-btn"
            onClick={() => navigate("/employer/post-job")}
          >
            + Post New Role
          </button>
        </header>

        <div className="analytics-grid">
          <div className="ana-card">
            <h4>Active Postings</h4>
            <p className="stat-number">4</p>
          </div>
          <div className="ana-card">
            <h4>New Applicants</h4>
            <p className="stat-number highlight-text">+28</p>
          </div>
        </div>

        <div className="listings-container">
          <h3>Active Listings</h3>
          <table className="innovative-table">
            <thead>
              <tr>
                <th>Job Position</th>
                <th>Candidates</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="job-title-cell">Backend Engineer</td>
                <td>12 Applicants</td>
                <td>
                  <span className="badge open">Open</span>
                </td>
                <td>
                  <button
                    className="action-link-btn"
                    onClick={() => navigate("/employer/manage-applicants")}
                  >
                    Review
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default EmployerHome;
