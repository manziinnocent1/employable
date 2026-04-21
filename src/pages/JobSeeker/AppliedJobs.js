import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobSeeker.css";

const AppliedJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="seeker-page-wrapper">
      {/* SHARED NAVBAR FOR CONSISTENCY */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-logo">
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
          <button className="logout-text-btn" onClick={() => navigate("/auth")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="seeker-wrapper">
        <header className="seeker-header">
          <div className="header-text">
            <h1>
              My <span className="highlight">Career Journey</span>
            </h1>
            <p>Tracking your path to success in Rwanda's tech scene.</p>
          </div>
        </header>

        <div className="timeline">
          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="date-marker">Today</div>
            <div className="timeline-card">
              <h4>Application Sent: Bank of Kigali</h4>
              <p className="role-text">Role: Fullstack Engineer</p>
              <span className="status-pill blue">Pending Review</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item active-interview">
            <div className="timeline-dot"></div>
            <div className="date-marker">2 Days Ago</div>
            <div className="timeline-card">
              <h4>Interview Scheduled: Volkswagen Rwanda</h4>
              <p className="role-text">Role: Systems Analyst</p>
              <span className="status-pill orange">Interviewing</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppliedJobs;
