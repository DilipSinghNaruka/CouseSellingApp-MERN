import React from 'react';
import './AnimatedFooter.css';

function Footer() {
  return (
    <footer className="animated-footer">
      <div className="footer-content">
        <div className="Footer_left-section">
          <span className="Footer_reserved-rights">All rights reserved</span>
          {/* your footer content for left section here */}
        </div>
        <div className="Footer_right-section">
          <div className="social-media-links">
            <button>Instagram</button>
            <button>Facebook</button>
            <button>Twitter</button>
            {/* your social media links here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
