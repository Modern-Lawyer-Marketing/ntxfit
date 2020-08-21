import React from 'react';
import Header from '../components/Header';
import MemberCTA from '../components/Home/MemberCTA';
import About from '../components/Home/About';

/**
 * Landing page
 */
const Home = () => (
  <div className="home">
    <Header backgroundImage={require('../images/plant.jpg')} backgroundPosition="60% 60%">
      <p>North Texas</p>
      <h1>Families In Transition</h1>
      <h2>Professionals Encouraging Healthy Families</h2>
    </Header>
    <MemberCTA />
    <About />
  </div>
);

export default Home;
