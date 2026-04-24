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

// Admin Imports
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserManagement from "./pages/Admin/UserManagement";
import JobModeration from "./pages/Admin/JobModeration";  
import PlatformAnalytics from "./pages/Admin/PlatformAnalytics";

import "./App.css";
// import PlatformAnalytics from "./pages/Admin/PlatformAnalytics";

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

        {/* Admin Route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/moderation" element={<JobModeration />} />
        <Route path="/admin/analytics" element={<PlatformAnalytics />} />

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
