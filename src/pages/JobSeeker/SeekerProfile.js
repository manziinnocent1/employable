import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobSeeker.css";

const SeekerProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="seeker-page-wrapper">
      {/* SHARED NAVBAR */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-logo">
            RW-<span>JOBS</span>
          </div>
          <div className="nav-links">
            <Link to="/seeker-dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/seeker/applied" className="nav-link">
              Applications
            </Link>
            <Link to="/seeker/profile" className="nav-link active">
              Profile
            </Link>
          </div>
          <button className="logout-text-btn" onClick={() => navigate("/auth")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="seeker-wrapper">
        <div className="profile-grid">
          {/* LEFT SIDE: PERSONAL INFO CARD */}
          <aside className="profile-card-sidebar">
            <div className="profile-avatar-large">IM</div>
            <h2 className="profile-name">Innocent Manzi</h2>
            <p className="profile-title">Software Engineer | Health Tech</p>
            <button className="edit-profile-btn">Edit Profile</button>
            <div className="profile-meta">
              <span>📍 Kigali, Rwanda</span>
              <span>📧 innocent@example.com</span>
            </div>
          </aside>

          {/* RIGHT SIDE: DETAILED CONTENT */}
          <div className="profile-details-area">
            <section className="profile-card-main">
              <h3>Professional Bio</h3>
              <p className="bio-text">
                Passionate developer focused on creating impactful digital
                solutions in Rwanda's tech ecosystem. Specializing in Health
                Informatics and full-stack development.
              </p>
            </section>

            <section className="profile-card-main">
              <h3>Core Stack</h3>
              <div className="skill-tags">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">MongoDB</span>
                <span className="skill-badge">Express</span>
              </div>
            </section>

            <section className="profile-card-main">
              <h3>Documents</h3>
              <div className="document-row">
                <div className="doc-info">
                  <span className="doc-icon">📄</span>
                  <span className="doc-name">Innocent_CV_2026.pdf</span>
                </div>
                <button className="action-btn-download">Download CV</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeekerProfile;
