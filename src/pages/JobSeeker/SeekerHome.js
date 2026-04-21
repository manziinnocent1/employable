import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./JobSeeker.css";

const SeekerHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to the root Landing Page instead of /auth
    navigate("/");
  };

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
            <Link to="/seeker-dashboard" className="nav-link active">
              Dashboard
            </Link>
            <Link to="/seeker/applied" className="nav-link">
              Applications
            </Link>
            <Link to="/seeker/profile" className="nav-link">
              Profile
            </Link>
          </div>
          {/* UPDATED LOGOUT ACTION */}
          <button className="logout-text-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <main className="seeker-wrapper">
        <header className="seeker-header">
          <div className="header-text">
            <h1>
              Welcome back, <span className="highlight">Innocent</span>
            </h1>
            <p>You have 2 interviews scheduled for this week.</p>
          </div>
          <div className="user-avatar-large">IM</div>
        </header>

        <section className="glass-stats">
          <div className="stat-card">
            <span className="stat-number">12</span>
            <p>Applications Sent</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">45</span>
            <p>Profile Views</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">2</span>
            <p>New Offers</p>
          </div>
        </section>

        <section className="application-section">
          <div className="section-header">
            <h2>Application Pipeline</h2>
          </div>
          <div className="job-row">
            <div className="job-info">
              <strong>Frontend Dev</strong>
              <span className="company-tag">MTN Rwanda</span>
            </div>
            <div className="job-status status-interview">Interviewing</div>
          </div>
          <div className="job-row">
            <div className="job-info">
              <strong>Product Manager</strong>
              <span className="company-tag">Irembo</span>
            </div>
            <div className="job-status status-pending">Applied</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeekerHome;
