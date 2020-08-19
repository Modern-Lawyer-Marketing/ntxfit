import React from 'react';
import '../styles/header.scss';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Header
 */
const Header = ({ backgroundImage, backgroundPosition, children, short }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`header ${isMobile ? 'mobile short' : ''} ${short ? 'short' : ''}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition,
        }}
      >
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Header;
