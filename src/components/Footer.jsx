import React from 'react';
import '../styles/footer.scss';

/**
 * Footer is shown on all pages
 */
const Footer = () => (
  <div className="footer">
    <div className="section">
      <ul>
        <li>Home</li>
        <li>Who We Are</li>
        <li>Events</li>
        <li>Resources</li>
      </ul>
      <p>© 2020 NTXFIT</p>
    </div>
  </div>
);

export default Footer;
