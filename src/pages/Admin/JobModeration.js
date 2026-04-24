import React, { useState } from "react";
import "./Admin.css";

const JobModeration = () => {
  const [activeQueue, setActiveQueue] = useState("Pending");

  const pendingJobs = [
    {
      id: 101,
      title: "Senior Frontend Architect",
      company: "Irembo",
      location: "Kigali (Hybrid)",
      salary: "$2,500 - $4,000",
      riskScore: "Low",
      tags: ["React", "TypeScript"],
      postedBy: "Verified Partner",
      date: "Just now",
    },
    {
      id: 102,
      title: "Cryptocurrency Analyst",
      company: "Global Trade Ltd",
      location: "Remote",
      salary: "Unspecified",
      riskScore: "High",
      tags: ["Crypto", "Finance"],
      postedBy: "New Account",
      date: "2h ago",
    },
  ];

  return (
    <div className="admin-page-content animate-fade-in">
      {/* INNOVATIVE MODERATION METRICS */}
      <div className="moderation-stats-hub">
        <div className="hub-card">
          <label>Queue Health</label>
          <div className="hub-value">94%</div>
          <div className="hub-bar">
            <div className="fill" style={{ width: "94%" }}></div>
          </div>
        </div>
        <div className="hub-card">
          <label>Avg. Review Time</label>
          <div className="hub-value">4.2m</div>
        </div>
        <div className="hub-card urgent">
          <label>High Risk Flagged</label>
          <div className="hub-value">01</div>
        </div>
      </div>

      <header className="page-header-innovative">
        <div className="header-title">
          <h2>Content Moderation</h2>
          <p>Analyzing incoming job telemetry for platform safety.</p>
        </div>

        <div className="queue-toggle-pills">
          <button
            className={activeQueue === "Pending" ? "active" : ""}
            onClick={() => setActiveQueue("Pending")}
          >
            Pending Queue ({pendingJobs.length})
          </button>
          <button
            className={activeQueue === "Flagged" ? "active" : ""}
            onClick={() => setActiveQueue("Flagged")}
          >
            Flagged
          </button>
        </div>
      </header>

      <div className="moderation-deck">
        {pendingJobs.map((job) => (
          <div
            key={job.id}
            className={`mod-card-innovative ${job.riskScore.toLowerCase()}`}
          >
            <div className="mod-card-header">
              <span className={`risk-badge ${job.riskScore.toLowerCase()}`}>
                {job.riskScore} Risk
              </span>
              <span className="partner-status">{job.postedBy}</span>
            </div>

            <div className="mod-card-body">
              <div className="job-main-info">
                <h3>{job.title}</h3>
                <p className="company-meta">
                  {job.company} • {job.location}
                </p>
                <div className="tag-cloud">
                  {job.tags.map((tag) => (
                    <span key={tag} className="mini-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="job-financial-info">
                <label>Offered Compensation</label>
                <span>{job.salary}</span>
              </div>
            </div>

            <div className="mod-card-footer">
              <div className="timestamp-group">
                <label>Received</label>
                <span>{job.date}</span>
              </div>
              <div className="mod-action-group">
                <button className="btn-view-deep">Analyze Details</button>
                <div className="v-divider"></div>
                <button className="btn-reject-icon" title="Reject">
                  ✕
                </button>
                <button className="btn-approve-icon" title="Approve">
                  ✓
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobModeration;
