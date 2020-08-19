import React from 'react';
import '../../styles/members/member-grid.scss';
import MemberCard from './MemberCard';

/**
 * About section
 */
const MemberGrid = ({ list }) => (
  <div className="member-grid">
    <div className="section">
      {list.map((val) => (<MemberCard {...val} />))}
    </div>
  </div>
);

export default MemberGrid;
