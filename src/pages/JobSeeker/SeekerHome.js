import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./JobSeeker.css";

const SeekerHome = () => {
  const navigate = useNavigate();
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const userName = "Manzi"; // This would typically come from your Auth state

  useEffect(() => {
    // Simple logic to check first-time visit via localStorage
    const visited = localStorage.getItem("hasVisited");
    if (!visited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleLogout = () => navigate("/");

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
          <button className="logout-text-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <main className="seeker-wrapper">
        {/* INNOVATIVE DYNAMIC GREETING */}
        <header className="innovative-header">
          <div className="greeting-box">
            <h1 className="fade-in-text">
              {isFirstVisit
                ? `Welcome, ${userName}!`
                : `Hi ${userName}, welcome back!`}
            </h1>
            <p className="sub-description">
              Explore new opportunities, track your progress, and manage your
              career journey all in one place.
            </p>
          </div>
        </header>

        {/* STATS SECTION WITH SMALLER ICONS */}
        {/* Stats Section with Compact Cards */}
        <section className="stats-container-compact">
          <div className="stats-grid-compact">
            {/* Applications Sent */}
            <div className="stat-card-sleek">
              <div className="sleek-icon blue-tint">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
              <div className="sleek-content">
                <span className="sleek-label">APPLICATIONS SENT</span>
                <div className="sleek-data">
                  <span className="sleek-number">12</span>
                  <span className="sleek-trend">+3 this week</span>
                </div>
              </div>
            </div>

            {/* Profile Views */}
            <div className="stat-card-sleek">
              <div className="sleek-icon purple-tint">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="sleek-content">
                <span className="sleek-label">PROFILE VIEWS</span>
                <div className="sleek-data">
                  <span className="sleek-number">45</span>
                  <span className="sleek-trend">+12%</span>
                </div>
              </div>
            </div>

            {/* New Offers */}
            <div className="stat-card-sleek">
              <div className="sleek-icon green-tint">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="sleek-content">
                <span className="sleek-label">NEW OFFERS</span>
                <div className="sleek-data">
                  <span className="sleek-number">2</span>
                  <span className="sleek-badge">ACTION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section className="application-section">
          <div className="section-header">
            <h2>Application Pipeline</h2>
            <span className="pipeline-count">Active: 2</span>
          </div>

          <div className="pipeline-grid">
            {/* Card 1 */}
            <div className="pipeline-card-innovative">
              <div className="pipeline-card-top">
                <div className="company-logo-placeholder">M</div>
                <div className="job-meta">
                  <h3>Frontend Dev</h3>
                  <p>MTN Rwanda</p>
                </div>
                <div className="job-status status-interview">Interviewing</div>
              </div>

              <div className="pipeline-progress-container">
                <div className="progress-label">
                  <span>Application Progress</span>
                  <span>60%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill interview-stage"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              <div className="pipeline-footer">
                <p className="next-step-text">
                  Next: <span>Technical Interview (Tomorrow)</span>
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pipeline-card-innovative">
              <div className="pipeline-card-top">
                <div className="company-logo-placeholder logo-blue">I</div>
                <div className="job-meta">
                  <h3>Product Manager</h3>
                  <p>Irembo</p>
                </div>
                <div className="job-status status-pending">Applied</div>
              </div>

              <div className="pipeline-progress-container">
                <div className="progress-label">
                  <span>Application Progress</span>
                  <span>20%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill applied-stage"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>

              <div className="pipeline-footer">
                <p className="next-step-text">
                  Next: <span>Waiting for Review</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Innovative Released Jobs Section */}
        <section className="available-jobs-section">
          <div className="section-header">
            <h2>Discover Opportunities</h2>
            <Link to="/jobs" className="view-all-link">
              View all jobs →
            </Link>
          </div>

          <div className="jobs-grid">
            {/* Job Card 1 */}
            <div className="job-opportunity-card">
              <div className="job-card-header">
                <span className="job-type-badge">Full-time</span>
                <span className="post-date">2h ago</span>
              </div>
              <div className="job-card-body">
                <h3>Senior UI/UX Designer</h3>
                <p className="company-name">BK Group PLC</p>
                <div className="job-tags">
                  <span>Figma</span>
                  <span>React</span>
                  <span>Remote</span>
                </div>
              </div>
              <div className="job-card-footer">
                <div className="salary-info">
                  <strong>$2k - $3.5k</strong>
                  <span>/mo</span>
                </div>
                <button className="apply-btn-innovative">Apply Now</button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="job-opportunity-card">
              <div className="job-card-header">
                <span className="job-type-badge">Contract</span>
                <span className="post-date">5h ago</span>
              </div>
              <div className="job-card-body">
                <h3>Backend Engineer</h3>
                <p className="company-name">Andela</p>
                <div className="job-tags">
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              <div className="job-card-footer">
                <div className="salary-info">
                  <strong>$4k - $6k</strong>
                  <span>/mo</span>
                </div>
                <button className="apply-btn-innovative">Apply Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeekerHome;
