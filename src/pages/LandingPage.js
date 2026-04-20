import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer"; // Imported and now will be used
import "./LandingPage.css";

const LandingPage = () => {
  // Mock data for featured jobs
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Irembo",
      location: "Kigali",
    },
    {
      id: 2,
      title: "Health Informaticist",
      company: "King Faisal Hospital",
      location: "Kigali",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "BK Group",
      location: "Kigali",
    },
  ];

  return (
    <div className="landing-page">
      {/* 1. Top Navigation */}
      <Navbar />

      {/* 2. Impactful Hero Section */}
      <Hero />

      {/* 3. Main Content Area */}
      <main className="content-wrapper">
        <section className="featured-section">
          <div className="section-header">
            <h2>Featured Opportunities</h2>
            <button className="view-all">View all jobs →</button>
          </div>

          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>

      {/* 4. Professional Footer - This fixes the 'defined but never used' error */}
      <Footer />
    </div>
  );
};

export default LandingPage;
