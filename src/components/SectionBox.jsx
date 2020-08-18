import React from 'react';
import '../styles/section-box.scss';

/**
 * Renders a reusable section box
 */
const SectionBox = ({ children, center }) => (
  <div className="section-box section">
    <div className={`box ${center && 'center'}`}>{children}</div>
  </div>
);

export default SectionBox;
