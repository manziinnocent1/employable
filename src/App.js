import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";

// Job Seeker Imports
import SeekerHome from "./pages/JobSeeker/SeekerHome";
import AppliedJobs from "./pages/JobSeeker/AppliedJobs";
import SeekerProfile from "./pages/JobSeeker/SeekerProfile";

// Employer Imports
import EmployerHome from "./pages/Employer/EmployerHome";
import PostJob from "./pages/Employer/PostJob";
import ApplicantManager from "./pages/Employer/ApplicantManager";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />

        {/* Job Seeker Routes */}
        <Route path="/seeker-dashboard" element={<SeekerHome />} />
        <Route path="/seeker/applied" element={<AppliedJobs />} />
        <Route path="/seeker/profile" element={<SeekerProfile />} />

        {/* Employer Routes */}
        <Route path="/employer-dashboard" element={<EmployerHome />} />
        <Route path="/employer/post-job" element={<PostJob />} />
        <Route
          path="/employer/manage-applicants"
          element={<ApplicantManager />}
        />

        {/* Fallback for 404 - Optional but professional */}
        <Route
          path="*"
          element={
            <div style={{ padding: "50px", textAlign: "center" }}>
              <h2>404 - Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
