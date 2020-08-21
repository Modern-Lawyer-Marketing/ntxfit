import React from 'react';
import Header from '../components/Header';
import MemberGrid from '../components/Members/MemberGrid';
import About from '../components/Members/About';

/**
 * Landing page
 */
const Members = () => (
  <div className="members">
    <Header short backgroundImage={require('../images/blue-couch.jpg')} backgroundPosition="right 40%">
      <h1>Who We Are</h1>
    </Header>
    <About />
    <MemberGrid />
  </div>
);

export default Members;
