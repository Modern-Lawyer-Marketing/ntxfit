import React from 'react';
import Header from '../components/Header';

/**
 * Landing page
 */
const Members = () => (
  <div className="members">
    <Header backgroundImage={require('../images/members-header.jpg')}>
      <h1>Who We Are</h1>
    </Header>
  </div>
);

export default Members;
