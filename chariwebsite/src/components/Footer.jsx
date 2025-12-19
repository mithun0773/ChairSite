import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO + DESCRIPTION */}
        <div className="footer-section">
          <h2 className="footer-logo">FurniStore</h2>
          <p className="footer-text">
            Premium handcrafted furniture designed for comfort, durability, and
            modern living. Quality you can trust for your home.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* SHOP CATEGORY */}
        <div className="footer-section">
          <h3>Shop</h3>
          <Link to="/category/chairs">Chairs</Link>
          <Link to="/category/sofas">Sofas</Link>
          <Link to="/category/beds">Beds</Link>
          <Link to="/category/tables">Tables</Link>
        </div>

        {/* COMPANY INFO */}
        <div className="footer-section">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blog">Blog</Link>
        </div>

        {/* SUPPORT */}
        <div className="footer-section">
          <h3>Help</h3>
          <Link to="/support">Support</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/shipping">Shipping Info</Link>
          <Link to="/returns">Return Policy</Link>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-section newsletter-section">
          <h3>Stay Updated</h3>
          <p className="footer-text">
            Subscribe to our newsletter for offers & updates.
          </p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FurniStore — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
