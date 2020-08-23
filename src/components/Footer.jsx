import React from 'react';
import '../styles/footer.scss';
import { Link } from 'react-router-dom';
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
          <Link onClick={() => window.scroll(0, 0)} to="/"><li>Home</li></Link>
          <Link onClick={() => window.scroll(0, 0)} to="/who-we-are"><li>Who We Are</li></Link>
          <Link onClick={() => window.scroll(0, 0)} to="/events"><li>Events</li></Link>
          <Link onClick={() => window.scroll(0, 0)} to="/resources/professional-standards-and-guidelines"><li>Resources</li></Link>
        </ul>
        <p>© 2020 NTXFIT</p>
      </div>
    </div>
  );
};
export default Footer;
