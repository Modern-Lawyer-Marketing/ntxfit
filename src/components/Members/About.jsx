import React from 'react';
import '../../styles/members/about.scss';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * About section
 */
const About = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="members-about">
      <div className={`section ${isMobile ? 'mobile' : ''}`}>
        <img src={require('../../images/baseball-glove.png')} alt="baseball glove" />
        <div className="content">
          <h2>There is no one-size-fits-all solution</h2>
          {/* eslint-disable-next-line max-len */}
          <p>Having worked on different aspects of cases over the years, we are committed to supporting diverse interventions to assist parents and children alike. As a group, we focus primarily on highlighting best practice information and growing professional services to better serve the community.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
