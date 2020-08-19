import React from 'react';
import '../styles/section-box.scss';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Renders a reusable section box
 */
const SectionBox = ({ children, center }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`section-box section ${isMobile ? 'mobile' : ''}`}>
      <div className={`box ${center && 'center'}`}>{children}</div>
    </div>
  );
};
export default SectionBox;
