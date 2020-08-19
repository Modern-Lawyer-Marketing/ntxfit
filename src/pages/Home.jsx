import React from 'react';
import Header from '../components/Header';
import MemberCTA from '../components/Home/MemberCTA';
import About from '../components/Home/About';

/**
 * Landing page
 */
const Home = () => (
  <div className="home">
    <Header backgroundImage={require('../images/home-header.jpg')} backgroundPosition="60%">
      <p>North Texas</p>
      <h1>Families In Transition</h1>
      <h2>Professionals Encouraging Healthy Families</h2>
    </Header>
    <About />
    <MemberCTA />
  </div>
);

export default Home;
