import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployerHome.css";

const PostJob = () => {
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
          <button className="logout-text-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>

      <main className="employer-wrapper">
        <div className="innovative-form-layout">
          {/* MAIN FORM AREA */}
          <div className="form-glass-card">
            <header className="form-header-innovative">
              <h1>
                Launch a <span className="highlight">New Role</span>
              </h1>
              <p>
                Attract the best talent by providing clear and detailed
                information.
              </p>
            </header>

            <form className="structured-form">
              {/* SECTION 1 */}
              <div className="form-section">
                <div className="section-indicator">01</div>
                <div className="section-content">
                  <h3>Basic Information</h3>
                  <div className="input-field full">
                    <label>Job Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Senior Backend Engineer"
                      required
                    />
                  </div>
                  <div className="input-grid-2">
                    <div className="input-field">
                      <label>Category</label>
                      <select>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Healthcare</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <label>Work Type</label>
                      <select>
                        <option>On-site (Kigali)</option>
                        <option>Remote</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="form-section">
                <div className="section-indicator">02</div>
                <div className="section-content">
                  <h3>Compensation & Timeline</h3>
                  <div className="input-grid-2">
                    <div className="input-field">
                      <label>Salary Range (Monthly)</label>
                      <div className="range-inputs">
                        <input type="number" placeholder="Min" />
                        <input type="number" placeholder="Max" />
                      </div>
                    </div>
                    <div className="input-field">
                      <label>Application Deadline</label>
                      <input type="date" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="form-section full-width-section">
                <div className="section-indicator">03</div>
                <div className="section-content">
                  <h3>Requirements & Details</h3>
                  <div className="input-field-expanding">
                    <label>Job Description</label>
                    {/* Reduced rows from 8 to 4 */}
                    <textarea
                      rows="4"
                      placeholder="Describe the daily impact of this role and the unique culture of your team..."
                    ></textarea>
                  </div>
                  <div className="input-field-expanding">
                    <label>Key Requirements (One per line)</label>
                    {/* Reduced rows from 6 to 3 */}
                    <textarea
                      rows="3"
                      placeholder="• 5+ years of Experience with React..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* INNOVATIVE ACTION BAR - FIXED ALIGNMENT */}
              <div className="form-action-bar-innovative">
                <button type="button" className="btn-ghost">
                  Save as Draft
                </button>
                <div className="btn-group-right">
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary-launch">
                    Publish Opportunity
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* SIDEBAR TOOLS */}
          <aside className="form-sidebar-innovative">
            <div className="tip-card-glass">
              <span className="tip-icon">💡</span>
              <h4>Posting Tip</h4>
              <p>
                Jobs with clear salary ranges get <strong>40% more</strong>{" "}
                qualified applicants.
              </p>
            </div>

            <div className="preview-card-dark">
              <h4>Live Preview</h4>
              <div className="preview-skeleton">
                <div className="skel-line title"></div>
                <div className="skel-line text"></div>
                <div className="skel-badge"></div>
              </div>
              <p className="skel-footer">Visible to 12,000+ job seekers</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default PostJob;
