import React from 'react';
import '../../styles/members/member-grid.scss';
import MemberCard from './MemberCard';
import memberList from '../../lib/memberList';

/**
 * About section
 */
const MemberGrid = () => (
  <div className="member-grid">
    <div className="section">
      {memberList.map((val, i) => (<MemberCard key={val.name + i} {...val} />))}
    </div>
  </div>
);

export default MemberGrid;
