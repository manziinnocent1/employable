import React, { useState } from "react";
import UserManagement from "./UserManagement";
import JobModeration from "./JobModeration";
import PlatformAnalytics from "./PlatformAnalytics"; // This connects the two files
import "./Admin.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // New logic for logout
  const handleLogout = () => {
    // This will redirect to the main landing page/login page
    window.location.href = "/";
  };

  const platformEvents = [
    {
      id: 1,
      initial: "BK",
      name: "Bank of Kigali",
      action: "updated corporate profile",
      time: "2 mins ago",
      type: "update",
    },
    {
      id: 2,
      initial: "IM",
      name: "Irembo",
      action: "posted 3 new job listings",
      time: "15 mins ago",
      type: "post",
    },
    {
      id: 3,
      initial: "AU",
      name: "Alice Umutoni",
      action: "verified her professional skills",
      time: "1h ago",
      type: "verification",
    },
  ];

  return (
    <div className="admin-container">
      {/* HEADER REMAINS THE SAME */}
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
              {["Overview", "Management", "Moderation", "Analytics"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="nav-right">
            {/* Added the innovative logout action within the profile widget */}
            <div className="user-profile-widget-innovative">
              <div className="avatar">SA</div>
              <div className="user-info">
                <span className="user-name">System Admin</span>
                <span className="user-role">Superuser</span>
              </div>
              <div className="v-divider-nav"></div>
              <button
                className="logout-action-btn"
                onClick={handleLogout}
                title="Logout"
              >
                <span className="logout-icon">⏻</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="admin-main-content">
        {/* BLOCK 1: OVERVIEW */}
        {activeTab === "Overview" && (
          <div className="tab-fade-in">
            <header className="dashboard-header">
              <div className="header-left">
                <h1>Platform Insights</h1>
                <div className="platform-pill">
                  <span className="pulse-dot"></span>
                  Kigali_HQ_01 Cluster Active
                </div>
              </div>
            </header>

            <section className="dashboard-intro">
              <p>
                Welcome back. The platform is seeing a{" "}
                <strong>12% surge</strong> in talent acquisition. Below is the
                real-time activity and market distribution across Rwanda.
              </p>
            </section>

            <div className="centered-content-container">
              <div className="stats-row-centered">
                <div className="bento-card-compact">
                  <div className="card-label">Total Active Talent</div>
                  <div className="stat-flex">
                    <span className="big-number">1,240</span>
                    <span className="growth-tag-innovative">+12.4%</span>
                  </div>
                </div>

                <div className="bento-card-compact">
                  <div className="card-label">Open Opportunities</div>
                  <div className="stat-flex">
                    <span className="big-number">85</span>
                  </div>
                </div>
              </div>

              <div className="bento-card activity-feed-centered">
                <div className="card-header-between">
                  <h3>Recent Platform Events</h3>
                  <button className="minimal-link-btn">View Full Audit</button>
                </div>
                <div className="modern-event-list">
                  {platformEvents.map((event) => (
                    <div className="event-item-sleek" key={event.id}>
                      <div className={`event-avatar-ring ${event.type}`}>
                        {event.initial}
                      </div>
                      <div className="event-text">
                        <p>
                          <strong>{event.name}</strong> {event.action}
                        </p>
                        <span className="event-timestamp">{event.time}</span>
                      </div>
                      <div className="event-badge">Verified</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BLOCK 2: MANAGEMENT */}
        {activeTab === "Management" && <UserManagement />}

        {/* BLOCK 3: MODERATION (MOVED OUTSIDE OVERVIEW) */}
        {activeTab === "Moderation" && <JobModeration />}

        {/* BLOCK 4: ANALYTICS (MOVED OUTSIDE OVERVIEW) */}
        {activeTab === "Analytics" && <PlatformAnalytics />}
      </main>
    </div>
  );
};

export default AdminDashboard;
