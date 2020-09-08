/* eslint-disable max-len */
import React from 'react';
import '../../styles/home/about.scss';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * About section
 */
const About = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="about">
      <div className={`section ${isMobile ? 'mobile' : ''}`}>
        <div className="thumbnail" style={{ backgroundImage: `url(${require('../../images/raincoats.jpg')})`, backgroundPosition: 'center 75%' }} />
        <div className="content">
          <h2>Supporting Families in Transition</h2>
          <p>Having worked on different aspects of cases over the years, we recognize there is no one-size-fits-all solution for families in transition, and we are committed to supporting diverse interventions to assist parents and children alike. As a group, we focus primarily on highlighting best practice information and growing professional services to better serve the community.</p>
        </div>
      </div>

      <div className={`section flip ${isMobile ? 'mobile' : ''}`}>
        <div className="thumbnail" style={{ backgroundImage: `url(${require('../../images/handshake-court.jpg')})`, backgroundPosition: '70% 20%' }} />
        <div className="content">
          <h2>Experience Matters</h2>
          <p>Each NTXFIT professional is highly trained and experienced working with families involved in litigation. Individuals in NTXFIT contribute to the legal and behavioral health professional knowledge base by publishing in peer-reviewed literature, speaking at national conferences, training local providers, giving news interviews, and serving as a resource for other professionals.</p>
        </div>
      </div>

      <div className={`section ${isMobile ? 'mobile' : ''}`}>
        <div className="thumbnail" style={{ backgroundImage: `url(${require('../../images/pen-and-paper.jpg')})`, backgroundPosition: '70%' }} />
        <div className="content">
          <h2>Why We Created NTXFIT</h2>
          <p>Professionals often encounter unique challenges when legal and behavioral health issues intersect. Our goal is to serve as an interdisciplinary resource while encouraging healthy family systems. We host various “lunch-and-learn” meetings and more formal seminars, both of which are open to all professionals working with the family courts.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
