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
          <Link to="/"><li>Home</li></Link>
          <Link to="/who-we-are"><li>Who We Are</li></Link>
          <Link to="/events"><li>Events</li></Link>
          <Link to="/resources"><li>Resources</li></Link>
        </ul>
        <p>© 2020 NTXFIT</p>
      </div>
    </div>
  );
};
export default Footer;
