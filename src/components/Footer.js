import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Section 1: Brand & Social */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            RW-<span>JOBS</span>
          </h2>
          <p>
            Empowering Rwanda's workforce through digital connection and career
            growth.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Innovative Contact Form */}
        <div className="footer-contact">
          <h4>Quick Inquiry</h4>
          <form className="footer-form">
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="How can we help?" rows="3"></textarea>
            <button type="submit" className="btn-send">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} RW-JOBS. Built with Excellence in
          Kigali.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
