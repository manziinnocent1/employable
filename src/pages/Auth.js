import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Left Side: Visual/Branding Section */}
        <div className="auth-visual">
          <div className="visual-overlay">
            <h2>{isLogin ? "Welcome Back!" : "Join the Future."}</h2>
            <p>Connecting Rwanda's top talent with industry leaders.</p>
          </div>
        </div>

        {/* Right Side: Form Content Section */}
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

          {isLogin ? (
            /* Login Form */
            <form className="auth-form fade-in">
              <h3>Login to your account</h3>
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn-auth">
                Sign In
              </button>
            </form>
          ) : (
            /* Registration Form */
            <form className="auth-form fade-in">
              <h3>Create an account</h3>

              {/* Spaced Input Row */}
              <div className="input-row">
                <input type="text" placeholder="Full Name" required />
                <select>
                  <option>I am a Job Seeker</option>
                  <option>I am an Employer</option>
                </select>
              </div>

              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />

              {/* Innovative Custom Checkbox */}
              <div className="terms-container">
                <label className="custom-checkbox">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  <span className="label-text">
                    I agree to the <a href="/terms">Terms & Conditions</a>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-auth">
                Create Account
              </button>
            </form>
          )}

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
