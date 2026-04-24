import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("I am a Job Seeker");
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();

    if (!isLogin) {
      // REGISTRATION
      alert(`Account created as ${role}! Now please login.`);
      setIsLogin(true);
    } else {
      // LOGIN - Updated logic to include Admin
      if (role === "I am an Admin") {
        navigate("/admin-dashboard");
      } else if (role === "I am an Employer") {
        navigate("/employer-dashboard");
      } else {
        navigate("/seeker-dashboard");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-visual">
          <div className="visual-overlay">
            <h2>{isLogin ? "Welcome Back!" : "Join the Future."}</h2>
            <p>Connecting Rwanda's top talent with industry leaders.</p>
          </div>
        </div>

        <div className="auth-form-container">
          <div className="auth-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          <form className="auth-form fade-in" onSubmit={handleAuth}>
            <h3>{isLogin ? "Login to your account" : "Create an account"}</h3>

            <div className="input-row">
              {!isLogin && (
                <input type="text" placeholder="Full Name" required />
              )}

              <div className="role-select-wrapper">
                <label className="input-label">Signing in as:</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="role-select"
                >
                  <option>I am a Job Seeker</option>
                  <option>I am an Employer</option>
                  {/* ADDED ADMIN OPTION */}
                  <option>I am an Admin</option>
                </select>
              </div>
            </div>

            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            {!isLogin && (
              <div className="terms-container">
                <label className="custom-checkbox">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  <span className="label-text">
                    I agree to the <a href="/terms">Terms & Conditions</a>
                  </span>
                </label>
              </div>
            )}

            <button type="submit" className="btn-auth">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="auth-footer-text">
            <p>
              Need help? <a href="/contact">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
