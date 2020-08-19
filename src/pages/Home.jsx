import React from 'react';
import Header from '../components/Header';
import MemberCTA from '../components/Home/MemberCTA';
import About1 from '../components/Home/About1';
import About2 from '../components/Home/About2';

/**
 * Landing page
 */
const Home = () => (
  <div className="home">
    <Header backgroundImage={require('../images/home-header.jpg')} backgroundPosition="60% 60%">
      <p>North Texas</p>
      <h1>Families In Transition</h1>
      <h2>Professionals Encouraging Healthy Families</h2>
    </Header>
    <About1 />
    <About2 />
    <MemberCTA />
  </div>
);

export default Home;
