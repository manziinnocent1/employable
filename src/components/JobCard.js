import React from "react";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import "./JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="company-logo-placeholder">{job.company.charAt(0)}</div>
        <div className="header-info">
          <h3>{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
      </div>

      <div className="job-details">
        <span>
          <HiOutlineLocationMarker /> {job.location}, Rwanda
        </span>
        <span>
          <HiOutlineBriefcase /> Full-time
        </span>
      </div>

      <div className="job-card-footer">
        <span className="job-tag">New</span>
        <button className="btn-apply-small">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
