import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployerHome.css";

const PostJob = () => {
  const navigate = useNavigate();

  return (
    <div className="employer-page-wrapper">
      {/* SHARED TOP NAVIGATION */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-logo">
            RW-<span>JOBS</span>
          </div>
          <div className="nav-links">
            <Link to="/employer-dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/employer/post-job" className="nav-link active">
              Post a Job
            </Link>
            <Link to="/employer/manage-applicants" className="nav-link">
              Applicants
            </Link>
          </div>
          <button className="logout-text-btn" onClick={() => navigate("/auth")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="form-page-container">
        <div className="glass-form-card innovative-shadow">
          <div className="form-header">
            <h2>
              Post a <span className="highlight">New Opportunity</span>
            </h2>
            <p>Connect with Rwanda's most driven professionals.</p>
          </div>

          <form className="grid-form">
            <div className="input-box full">
              <label>Job Title</label>
              <input
                type="text"
                placeholder="e.g. Senior Backend Engineer"
                required
              />
            </div>

            <div className="input-box">
              <label>Category</label>
              <select>
                <option>Engineering</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Finance</option>
              </select>
            </div>

            <div className="input-box">
              <label>Work Type</label>
              <select>
                <option>On-site (Kigali)</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div className="input-box full">
              <label>Description & Requirements</label>
              <textarea
                rows="6"
                placeholder="What makes this role unique? Detail the skills and experience required."
              ></textarea>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="secondary-btn"
                onClick={() => navigate("/employer-dashboard")}
              >
                Cancel
              </button>
              <button type="submit" className="prime-btn">
                Launch Listing
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PostJob;
