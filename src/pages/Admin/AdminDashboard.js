import React, { useState } from "react"; // Added useState
import "./Admin.css";

const AdminDashboard = () => {
  // Logic to track which page is currently viewed
  const [activeTab, setActiveTab] = useState("Overview");

  // Mock data for the Management & Moderation views
  const users = [
    {
      id: 1,
      name: "Jean Paul",
      role: "Job Seeker",
      email: "jp@nexus.rw",
      status: "active",
    },
    {
      id: 2,
      name: "Bank of Kigali",
      role: "Employer",
      email: "hr@bk.rw",
      status: "verified",
    },
    {
      id: 3,
      name: "Alice Umutoni",
      role: "Job Seeker",
      email: "alice@gmail.com",
      status: "pending",
    },
  ];

  const pendingJobs = [
    {
      id: 101,
      title: "Frontend Developer",
      company: "Irembo",
      date: "Just now",
    },
    {
      id: 102,
      title: "Financial Analyst",
      company: "MTN Rwanda",
      date: "2h ago",
    },
  ];

  return (
    <div className="admin-container">
      {/* INNOVATIVE TOP NAVIGATION */}
      <header className="admin-navbar-wrapper">
        <nav className="admin-navbar">
          <div className="nav-left">
            <div className="logo-box">A</div>
            <div className="brand-text">
              Admin<span>Nexus</span>
            </div>
          </div>

          <div className="nav-center">
            <div className="nav-links-container">
              <button
                className={`nav-link ${activeTab === "Overview" ? "active" : ""}`}
                onClick={() => setActiveTab("Overview")}
              >
                Overview
              </button>
              <button
                className={`nav-link ${activeTab === "Management" ? "active" : ""}`}
                onClick={() => setActiveTab("Management")}
              >
                Management
              </button>
              <button
                className={`nav-link ${activeTab === "Moderation" ? "active" : ""}`}
                onClick={() => setActiveTab("Moderation")}
              >
                Moderation
              </button>
              <button
                className={`nav-link ${activeTab === "Analytics" ? "active" : ""}`}
                onClick={() => setActiveTab("Analytics")}
              >
                Analytics
              </button>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-utility">
              <div className="user-profile-widget">
                <div className="avatar">SA</div>
                <div className="user-info">
                  <span className="user-name">System Admin</span>
                  <span className="user-role">Superuser</span>
                </div>
                <button className="logout-btn" title="Logout">
                  <span className="logout-icon">⏻</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="admin-main-content">
        {/* PAGE 1: OVERVIEW (Your existing bento grid) */}
        {activeTab === "Overview" && (
          <div className="tab-fade-in">
            <header className="dashboard-header">
              <div className="header-left">
                <h1>System Dashboard</h1>
                <div className="platform-pill">
                  <span className="pulse-dot"></span>
                  Live Cluster: Kigali_HQ_01
                </div>
              </div>
              <div className="header-right">
                <button className="btn-glass">Download CSV</button>
                <button className="btn-primary-action">
                  Intelligence Report
                </button>
              </div>
            </header>

            <section className="dashboard-intro">
              <p>
                Welcome back, Admin. Your system is currently operating at{" "}
                <strong>peak efficiency</strong>. We've observed a 12% surge in
                talent acquisition this month. Review your security alerts below
                and manage incoming job listings for the Rwandan market.
              </p>
            </section>

            <div className="bento-layout">
              <div className="bento-card stat-main compact">
                <div className="card-head">
                  <label>Total Users</label>
                  <div className="growth-tag">+12.4%</div>
                </div>
                <div className="big-number">1,240</div>
              </div>

              <div className="bento-card stat-secondary compact">
                <label>Active Jobs</label>
                <div className="mid-number">85</div>
                <div className="mini-progress">
                  <div className="progress-fill" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="bento-card stat-urgent compact">
                <label>Security Alerts</label>
                <div className="mid-number color-red">03</div>
                <button className="btn-link-action">Resolve Issues →</button>
              </div>

              <div className="bento-card activity-feed span-2">
                <div className="card-header-flex">
                  <h3>Recent Platform Events</h3>
                  <button className="text-btn">View All</button>
                </div>
                <div className="event-timeline">
                  <div className="event-row">
                    <div className="event-icon bg-blue">BK</div>
                    <div className="event-details">
                      <p>
                        <strong>Bank of Kigali</strong> updated profile
                      </p>
                      <span>2 mins ago</span>
                    </div>
                    <div className="event-status verified">Success</div>
                  </div>
                </div>
              </div>

              <div className="bento-card system-controls">
                <h3>System Terminal</h3>
                <div className="terminal-ui">
                  <div className="terminal-line">
                    <span>$</span> cache_clear --force
                  </div>
                  <div className="terminal-line">
                    <span>$</span> node_verify_all
                  </div>
                </div>
                <div className="control-grid">
                  <button className="ctrl-btn">Sync Database</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: MANAGEMENT */}
        {activeTab === "Management" && (
          <div className="tab-fade-in">
            <header className="dashboard-header">
              <h1>User Directory</h1>
            </header>
            <div className="user-grid-innovative">
              {users.map((user) => (
                <div className="user-card-small" key={user.id}>
                  <div className={`mini-status ${user.status}`}></div>
                  <div className="user-avatar-small">{user.name.charAt(0)}</div>
                  <div className="user-card-info">
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 3: MODERATION */}
        {activeTab === "Moderation" && (
          <div className="tab-fade-in">
            <header className="dashboard-header">
              <h1>Content Queue</h1>
            </header>
            <div className="moderation-stack">
              {pendingJobs.map((job) => (
                <div className="mod-card-sleek" key={job.id}>
                  <div className="mod-info">
                    <h3>{job.title}</h3>
                    <p>
                      {job.company} • {job.date}
                    </p>
                  </div>
                  <div className="mod-btns">
                    <button className="btn-approve-mini">Approve</button>
                    <button className="btn-reject-mini">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 4: ANALYTICS */}
        {activeTab === "Analytics" && (
          <div className="tab-fade-in">
            <header className="dashboard-header">
              <h1>Intelligence & Growth</h1>
            </header>
            <div className="analytics-grid-innovative">
              <div className="bento-card span-2">
                <h3>Platform Growth Trends</h3>
                <div className="innovative-chart">
                  <div className="chart-column" style={{ height: "40%" }}></div>
                  <div className="chart-column" style={{ height: "70%" }}></div>
                  <div className="chart-column" style={{ height: "90%" }}></div>
                  <div className="chart-column" style={{ height: "60%" }}></div>
                </div>
              </div>
              <div className="bento-card">
                <h3>Market Split</h3>
                <div className="donut-placeholder">65%</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
