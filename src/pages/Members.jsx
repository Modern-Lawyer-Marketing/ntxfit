import React from 'react';
import Header from '../components/Header';
import MemberGrid from '../components/Members/MemberGrid';
import About from '../components/Members/About';

/**
 * Landing page
 */
const Members = () => (
  <div className="members">
    <Header short backgroundImage={require('../images/girl-binoculars.jpg')} backgroundPosition="center 40%">
      <h1>The Members of NTXFIT</h1>
    </Header>
    <About />
    <MemberGrid />
  </div>
);

export default Members;
