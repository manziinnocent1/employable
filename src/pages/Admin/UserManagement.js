import React, { useState } from "react";
import "./Admin.css";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const users = [
    {
      id: 1,
      name: "Jean Paul",
      role: "Job Seeker",
      status: "Active",
      email: "jp@nexus.rw",
      joined: "Oct 2023",
      lastLogin: "2h ago",
      trustScore: 98,
      region: "Kigali",
    },
    {
      id: 2,
      name: "Bank of Kigali",
      role: "Employer",
      status: "Verified",
      email: "hr@bk.rw",
      joined: "Jan 2024",
      lastLogin: "5m ago",
      trustScore: 100,
      region: "Nyarugenge",
    },
    {
      id: 3,
      name: "Alice Umutoni",
      role: "Job Seeker",
      status: "Pending",
      email: "alice@gmail.com",
      joined: "Mar 2024",
      lastLogin: "Never",
      trustScore: 45,
      region: "Musanze",
    },
    {
      id: 4,
      name: "Irembo Gov",
      role: "Employer",
      status: "Active",
      email: "admin@irembo.gov",
      joined: "Dec 2023",
      lastLogin: "1d ago",
      trustScore: 92,
      region: "Gasabo",
    },
    {
      id: 5,
      name: "Kigali Tech Hub",
      role: "Employer",
      status: "Verified",
      email: "contact@kth.rw",
      joined: "Feb 2024",
      lastLogin: "10m ago",
      trustScore: 88,
      region: "Kicukiro",
    },
  ];

  const toggleSelect = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id],
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="admin-page-content animate-fade-in">
      {/* TOP INNOVATION: INTERACTIVE DASHBOARD HEADER */}
      <div className="admin-hero-section">
        <div className="hero-text">
          <h1>
            Identity Intelligence <span>v2.0</span>
          </h1>
          <p>
            Real-time neural monitoring of platform participants and trust
            metrics.
          </p>
        </div>
        <div className="live-pulse-container">
          <div className="pulse-circle"></div>
          <span>Live System Sync</span>
        </div>
      </div>

      {/* SECTION 1: DATA VISUALIZATION BENTO BOX */}
      <div className="analytics-bento-grid">
        <div className="bento-card-large stats-graph">
          <div className="card-label">User Activity Waves</div>
          <div className="wave-container">
            {/* Mock visual bars for growth */}
            {[40, 70, 45, 90, 65, 80, 95, 60].map((h, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="bento-card-small">
          <label>Global Trust Avg</label>
          <h2>84.2%</h2>
          <div className="trend-up">+5.2%</div>
        </div>
        <div className="bento-card-small">
          <label>Neural Flags</label>
          <h2>02</h2>
          <div className="trend-none">Clear</div>
        </div>
      </div>

      {/* SECTION 2: THE CONTROL BAR */}
      <div className="control-toolbar">
        <div className="toolbar-left">
          <div className="search-neon-wrapper">
            <input
              type="text"
              placeholder="Query identity database..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="neon-select"
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="All">All Identities</option>
            <option value="Job Seeker">Seekers</option>
            <option value="Employer">Employers</option>
          </select>
        </div>

        <div className="toolbar-right">
          {selectedUsers.length > 0 && (
            <div className="bulk-actions animate-slide-right">
              <button className="btn-bulk-verify">
                Verify ({selectedUsers.length})
              </button>
              <button className="btn-bulk-delete">Purge</button>
            </div>
          )}
          <button className="btn-deploy-gradient">Deploy Identity</button>
        </div>
      </div>

      {/* SECTION 3: THE INTELLIGENT GRID */}
      <div className="user-grid-premium">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className={`user-card-premium ${selectedUsers.includes(user.id) ? "selected" : ""}`}
            onClick={() => toggleSelect(user.id)}
          >
            <div className="card-top">
              <div className={`status-pill ${user.status.toLowerCase()}`}>
                {user.status}
              </div>
              <div className="trust-radial">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${user.trustScore}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="percentage">{user.trustScore}%</span>
              </div>
            </div>

            <div className="card-profile">
              <div className="avatar-hex">
                <div className="hex-inner">{user.name.charAt(0)}</div>
              </div>
              <h3>{user.name}</h3>
              <span className="location-tag">📍 {user.region}, RW</span>
            </div>

            <div className="card-meta-info">
              <div className="meta-box">
                <label>Sync Date</label>
                <span>{user.joined}</span>
              </div>
              <div className="meta-box">
                <label>Role</label>
                <span className="role-text">{user.role}</span>
              </div>
            </div>

            <div className="card-footer-actions">
              <button className="glass-btn">Deep Trace</button>
              <button className="glass-btn danger">Restrict</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
