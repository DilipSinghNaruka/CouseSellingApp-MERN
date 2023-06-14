import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assests/images/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={toggle ? 'navbar-menu active' : 'navbar-menu'}>
        <div>
          <div className="navbar-menu-item">
            <Link to="/" className="navbar-menu-link">
              Home
            </Link>
          </div>
          <div className="navbar-menu-item">
            <Link to="/courses" className="navbar-menu-link">
              Browse All Courses
            </Link>
          </div>
          <div className="navbar-menu-item">
            <Link to="/" className="navbar-menu-link">
              Request Link Course
            </Link>
          </div>
          <div className="navbar-menu-item">
            <Link to="/" className="navbar-menu-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="signuploginbtn">
          <span>
            <Link to="/login">login</Link>
          </span>
          <span>
            <Link to="/signup">signup</Link>
          </span>
        </div>
      </div>

      <div
        className={toggle ? 'navbar-toggle active' : 'navbar-toggle'}
        onClick={handleToggle}
      >
        <span> </span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
export default Header;
