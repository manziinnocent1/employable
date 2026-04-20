import React, { useState, useEffect } from "react";
import "./Hero.css";

// Reusable Counter Component for that "Innovative" feel
const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          Connect with Rwanda's{" "}
          <span className="text-gradient">Top Employers</span>
        </h1>
        <p>Explore thousands of job opportunities across Kigali and beyond.</p>

        {/* Filter Box */}
        <div className="search-glass">
          <input type="text" placeholder="Job title, skills, or company" />
          <select>
            <option>All Districts</option>
            <option>Kigali</option>
            <option>Musanze</option>
            <option>Rubavu</option>
          </select>
          <button className="btn-search">Find Jobs</button>
        </div>

        {/* Separated Stats Section with Animated Counters */}
        <div className="hero-stats-container">
          <div className="stat-item">
            <h2 className="stat-number">
              <Counter end={1200} duration={2000} />+
            </h2>
            <p className="stat-label">Active Jobs</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2 className="stat-number">
              <Counter end={450} duration={2000} />+
            </h2>
            <p className="stat-label">Companies</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2 className="stat-number">
              <Counter end={85} duration={2000} />%
            </h2>
            <p className="stat-label">Hiring Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
