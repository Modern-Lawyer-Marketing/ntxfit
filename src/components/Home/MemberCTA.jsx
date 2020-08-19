import React from 'react';
import '../../styles/home/member-cta.scss';
import { Link } from 'react-router-dom';
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
      <Link to="/who-we-are" onClick={() => window.scroll(0, 0)} className="button">
        <span>Learn more</span>
      </Link>
    </SectionBox>
  </div>
);
export default MemberCTA;
