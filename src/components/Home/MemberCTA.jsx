import React from 'react';
import '../../styles/home-member-cta.scss';
import Button from '../Button';

/**
 * Member call to action
 */
const MemberCTA = () => (
  <div className="home-member-cta">
    <div className="section">
      <h2>Who We Are</h2>
      <p>The group includes mental health professionals, mediators, educators, and other support providers.</p>
      <Button>Learn More</Button>
    </div>
  </div>
);

export default MemberCTA;
