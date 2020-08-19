import React from 'react';
import '../../styles/home/header.scss';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * Header
 */
const Header = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`home-header ${isMobile ? 'mobile' : ''}`}>
      <div className="background-image">
        <div className="content">
          <p>North Texas</p>
          <h1>Families In Transition</h1>
          <h2>Professionals Encouraging Healthy Families</h2>
        </div>
      </div>
    </div>
  );
};
export default Header;
