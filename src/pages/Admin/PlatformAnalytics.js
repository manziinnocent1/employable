import React, { useState } from "react";
import "./Admin.css";

const PlatformAnalytics = () => {
  const [timeframe, setTimeframe] = useState("Live");

  return (
    <div className="admin-page-content animate-fade-in">
      {/* INNOVATIVE TOP LAYER: PULSING REAL-TIME METRICS */}
      <div className="analytics-streaming-header">
        <div className="stream-card">
          <div className="stream-label">Current Throughput</div>
          <div className="stream-value">
            4.2k <span className="req">req/s</span>
          </div>
          <div className="mini-wave">
            {[20, 40, 30, 60, 50, 80].map((h, i) => (
              <div
                key={i}
                className="wave-line"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="stream-card">
          <div className="stream-label">Active Socket Connections</div>
          <div className="stream-value">842</div>
          <span className="stream-trend">+5.2% vs last hour</span>
        </div>
        <div className="stream-card">
          <div className="stream-label">Neural Match Accuracy</div>
          <div className="stream-value">91.8%</div>
          <div className="status-indicator-glow"></div>
        </div>
      </div>

      <header className="page-header-innovative">
        <div className="header-title">
          <h2>Platform Intelligence</h2>
          <p>
            Analyzing behavioral patterns and growth trajectories across the
            ecosystem.
          </p>
        </div>

        <div className="analytics-controls">
          <select
            className="time-select-innovative"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option>Live</option>
            <option>Last 24h</option>
            <option>Last 7 Days</option>
            <option>Q1 Performance</option>
          </select>
          <button className="btn-primary-action shadow-blue">
            Sync Global Nodes
          </button>
        </div>
      </header>

      {/* SECTION 2: BENTO INTELLIGENCE GRID */}
      <div className="analytics-bento-heavy">
        {/* LARGE GROWTH CHART WITH GLASSMORPHISM */}
        <div className="bento-card-pro span-2">
          <div className="card-header-flex">
            <h3>Registration Velocity</h3>
            <div className="chart-legend">
              <span className="legend-item seeker">Seekers</span>
              <span className="legend-item employer">Employers</span>
            </div>
          </div>
          <div className="advanced-chart-area">
            {/* Creative CSS Bars with tooltips */}
            {[
              { m: "Jan", s: 30, e: 10 },
              { m: "Feb", s: 45, e: 20 },
              { m: "Mar", s: 80, e: 35 },
              { m: "Apr", s: 95, e: 45 },
              { m: "May", s: 70, e: 30 },
              { m: "Jun", s: 85, e: 40 },
            ].map((data, i) => (
              <div key={i} className="chart-group">
                <div className="stack">
                  <div className="bar-s" style={{ height: `${data.s}%` }}></div>
                  <div className="bar-e" style={{ height: `${data.e}%` }}></div>
                </div>
                <span className="month-label">{data.m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CIRCULAR DATA REPRESENTATION */}
        <div className="bento-card-pro">
          <h3>Ecosystem Balance</h3>
          <div className="donut-box">
            <svg viewBox="0 0 36 36" className="circular-chart-pro">
              <path
                className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle-main"
                strokeDasharray="65, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="donut-content">
              <h4>65%</h4>
              <span>Seekers</span>
            </div>
          </div>
          <div className="split-stats">
            <div className="split-row">
              <span>Employers</span> <strong>35%</strong>
            </div>
            <div className="split-row">
              <span>Admin Accounts</span> <strong>0.2%</strong>
            </div>
          </div>
        </div>

        {/* RETENTION METRIC */}
        <div className="bento-card-pro">
          <h3>User Retention</h3>
          <div className="retention-value">82.4%</div>
          <p className="retention-desc">
            Users returning within 7 days of onboarding.
          </p>
          <div className="retention-progress-bg">
            <div
              className="retention-progress-fill"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>

        {/* REGIONAL HOTSPOTS */}
        <div className="bento-card-pro span-2">
          <h3>Regional Distribution (Rwanda)</h3>
          <div className="region-list">
            <div className="region-item">
              <span>Kigali City</span>
              <div className="r-bar">
                <div className="r-fill" style={{ width: "90%" }}></div>
              </div>
              <strong>90%</strong>
            </div>
            <div className="region-item">
              <span>Northern Prov.</span>
              <div className="r-bar">
                <div className="r-fill" style={{ width: "45%" }}></div>
              </div>
              <strong>45%</strong>
            </div>
            <div className="region-item">
              <span>Western Prov.</span>
              <div className="r-bar">
                <div className="r-fill" style={{ width: "30%" }}></div>
              </div>
              <strong>30%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformAnalytics;
