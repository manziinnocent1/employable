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
          <button className="logout-text-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="employer-wrapper">
        <header className="emp-header-premium">
          <div className="header-content">
            <h1>
              Recruitment <span className="highlight">Command Center</span>
            </h1>
            <p>Monitor your talent pipeline and manage active hiring cycles.</p>
          </div>
          <div className="header-actions">
            <button className="secondary-btn">Download Report</button>
            <button
              className="prime-action-btn"
              onClick={() => navigate("/employer/post-job")}
            >
              + Post New Role
            </button>
          </div>
        </header>

        {/* 1. TOP ANALYTICS - Expanded with Progress bars */}
        {/* Compact Analytics Grid */}
        <section className="analytics-grid-compact">
          {/* Active Postings */}
          <div className="ana-card-sleek">
            <div className="sleek-header">
              <span className="sleek-label">ACTIVE POSTINGS</span>
              <span className="sleek-trend positive">↑ 2</span>
            </div>
            <div className="sleek-body">
              <h2 className="sleek-number">4</h2>
              <div className="sleek-progress-container">
                <div
                  className="sleek-progress-fill"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Total Candidates */}
          <div className="ana-card-sleek">
            <div className="sleek-header">
              <span className="sleek-label">TOTAL CANDIDATES</span>
              <span className="sleek-trend positive">↑ 12%</span>
            </div>
            <div className="sleek-body">
              <h2 className="sleek-number">+156</h2>
              <p className="sleek-subtext">Across active roles</p>
            </div>
          </div>

          {/* Interviews Today */}
          <div className="ana-card-sleek">
            <div className="sleek-header">
              <span className="sleek-label">INTERVIEWS TODAY</span>
              <span className="sleek-status-live">Live</span>
            </div>
            <div className="sleek-body">
              <h2 className="sleek-number">8</h2>
              <p className="sleek-subtext">Next: 10:30 AM (Manzi I.)</p>
            </div>
          </div>
        </section>

        <div className="dashboard-main-content">
          {/* 2. LEFT: ACTIVE LISTINGS TABLE */}
          <section className="listings-section-glass">
            <div className="section-header-sleek">
              <h3>Hiring Pipeline</h3>
              <button className="text-link">View All Listings</button>
            </div>
            <table className="innovative-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>New</th>
                  <th>Interviews</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="job-title-cell">
                    <strong>Backend Engineer</strong>
                    <span className="loc-tag">Kigali • Remote</span>
                  </td>
                  <td>
                    <span className="new-count">+12</span>
                  </td>
                  <td>4</td>
                  <td>
                    <span className="badge open">Active</span>
                  </td>
                  <td>
                    <button
                      className="review-btn-sleek"
                      onClick={() => navigate("/employer/manage-applicants")}
                    >
                      Manage
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="job-title-cell">
                    <strong>Product Designer</strong>
                    <span className="loc-tag">Kigali • Hybrid</span>
                  </td>
                  <td>
                    <span className="new-count">+5</span>
                  </td>
                  <td>2</td>
                  <td>
                    <span className="badge open">Active</span>
                  </td>
                  <td>
                    <button className="review-btn-sleek">Manage</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 3. RIGHT: RECENT ACTIVITY / QUICK ACTIONS */}
          <aside className="activity-panel-glass">
            <h3>Recent Activity</h3>
            <div className="activity-feed">
              <div className="activity-item">
                <div className="user-icon">IM</div>
                <div className="act-text">
                  <strong>Innocent Manzi</strong> applied for{" "}
                  <strong>Backend Engineer</strong>
                  <span className="time-stamp">2 mins ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="user-icon blue">BK</div>
                <div className="act-text">
                  Interview scheduled with <strong>Bank of Kigali</strong>
                  <span className="time-stamp">1 hour ago</span>
                </div>
              </div>
            </div>

            <div className="quick-stats-box">
              <label>Time to Hire</label>
              <div className="stat-bar-group">
                <strong>14 Days</strong>
                <span>avg. this month</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default EmployerHome;
