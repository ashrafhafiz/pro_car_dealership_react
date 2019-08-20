import React from "react";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-3" id="navBar">
      <a href="#home" className="navbar-brand">
        <img src="img/gearLogo.png" alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNav"
      >
        <span className="navbar-icon">
          <i className="fas fa-bars" />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="myNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a href="#navBar" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#inventory" className="nav-link">
              Inventory
            </a>
          </li>
          <li className="nav-item">
            <a href="#featured" className="nav-link">
              Featured
            </a>
          </li>
        </ul>

        <div className="nav-icons d-none d-lg-block">
          <a href="#home" className="nav-icon px-1">
            <i className="fab fa-facebook" />
          </a>
          <a href="#home" className="nav-icon px-1">
            <i className="fab fa-twitter" />
          </a>
          <a href="#home" className="nav-icon px-1">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
