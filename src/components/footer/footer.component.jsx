import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="footer-icons d-flex justify-content-around">
        <a href="#home" className="footer-icon">
          <i className="fab fa-facebook" />
        </a>
        <a href="#home" className="footer-icon">
          <i className="fab fa-twitter" />
        </a>
        <a href="#home" className="footer-icon">
          <i className="fab fa-instagram" />
        </a>
        <a href="#home" className="footer-icon">
          <i className="fab fa-linkedin" />
        </a>
        <a href="#home" className="footer-icon">
          <i className="fab fa-google-plus" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
