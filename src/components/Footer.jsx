import React from 'react';
import '../styles/footer.scss';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Footer is shown on all pages
 */
const Footer = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="footer">
      <div className="section">
        <ul className={isMobile ? 'mobile' : ''}>
          <li>Home</li>
          <li>Who We Are</li>
          <li>Events</li>
          <li>Resources</li>
        </ul>
        <p>© 2020 NTXFIT</p>
      </div>
    </div>
  );
};
export default Footer;
