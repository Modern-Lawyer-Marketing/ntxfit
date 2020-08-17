import React from 'react';
import Header from '../components/Home/Header';
import MemberCTA from '../components/Home/MemberCTA';
import About from '../components/Home/About';

/**
 * Landing page
 */
const Home = () => (
  <div className="home">
    <Header />
    <About />
    <MemberCTA />
  </div>
);

export default Home;
