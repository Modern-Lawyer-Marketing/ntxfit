import React from 'react';
import '../../styles/home/member-cta.scss';
import Button from '../Button';
import SectionBox from '../SectionBox';

/**
 * Member call to action
 */
const MemberCTA = () => (
  <div className="home-member-cta">
    <SectionBox center>
      <h2>Who We Are</h2>
      {/* eslint-disable-next-line max-len */}
      <p>The group includes mental health professionals, mediators, educators, and other support providers.</p>
      <Button>Learn More</Button>
    </SectionBox>
  </div>
);

export default MemberCTA;
