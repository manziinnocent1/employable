import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobSeeker.css";

const SeekerProfile = () => {
  const navigate = useNavigate();

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
          <button className="logout-text-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="seeker-wrapper">
        <div className="profile-innovative-grid">
          {/* LEFT COLUMN: IDENTITY CARD */}
          <aside className="identity-column">
            <div className="identity-card-premium">
              <div className="avatar-container">
                <div className="profile-avatar-large">IM</div>
                <div className="status-indicator-online"></div>
              </div>
              <h2 className="profile-name">Innocent Manzi</h2>
              <p className="profile-title">Fullstack Engineer | Health Tech</p>

              <div className="profile-location">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Kigali, Rwanda</span>
              </div>

              <button className="innovative-btn-edit">Edit Profile</button>

              {/* <div className="social-links-minimal">
                <button className="social-icon">Li</button>
                <button className="social-icon">Gh</button>
                <button className="social-icon">Tw</button>
              </div> */}

              <div className="profile-completeness">
                <div className="completeness-label">
                  <span>Profile Strength</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: DETAILED INSIGHTS */}
          <div className="details-column">
            {/* PERSONAL BIO */}
            <section className="glass-profile-section">
              <h3 className="section-title-premium">Professional Narrative</h3>
              <p className="bio-text-refined">
                Passionate developer focused on creating impactful digital
                solutions in Rwanda's tech ecosystem. With over 4 years of
                experience, I specialize in Health Informatics and building
                scalable full-stack applications that solve real-world community
                problems.
              </p>
            </section>

            {/* CORE STACK WITH CATEGORIES */}
            <section className="glass-profile-section">
              <h3 className="section-title-premium">Technical Core</h3>
              <div className="skill-category-group">
                <div className="skill-cat">
                  <label>Frontend</label>
                  <div className="skill-tags">
                    <span className="skill-badge-premium">React</span>
                    <span className="skill-badge-premium">Next.js</span>
                    <span className="skill-badge-premium">Tailwind</span>
                  </div>
                </div>
                <div className="skill-cat">
                  <label>Backend</label>
                  <div className="skill-tags">
                    <span className="skill-badge-premium">Node.js</span>
                    <span className="skill-badge-premium">PostgreSQL</span>
                    <span className="skill-badge-premium">GraphQL</span>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPERIENCE / HISTORY */}
            <section className="glass-profile-section">
              <h3 className="section-title-premium">Career Milestone</h3>
              <div className="milestone-item">
                <div className="milestone-logo">BK</div>
                <div className="milestone-info">
                  <h4>Senior Developer</h4>
                  <p>Bank of Kigali • 2024 - Present</p>
                </div>
              </div>
              <div className="milestone-item">
                <div className="milestone-logo">IH</div>
                <div className="milestone-info">
                  <h4>Junior Engineer</h4>
                  <p>Irembo • 2022 - 2024</p>
                </div>
              </div>
            </section>

            {/* DOCUMENTS SECTION */}
            <section className="glass-profile-section">
              <h3 className="section-title-premium">Certified Documents</h3>
              <div className="document-card-innovative">
                <div className="doc-icon-box">PDF</div>
                <div className="doc-meta-info">
                  <span className="doc-filename">Innocent_CV_2026.pdf</span>
                  <span className="doc-filesize">
                    1.2 MB • Updated 2 days ago
                  </span>
                </div>
                <button className="download-btn-circle">↓</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeekerProfile;
