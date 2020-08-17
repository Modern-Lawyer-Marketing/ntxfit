import React from 'react';
import '../../styles/home-header.scss';

/**
 * Header
 */
const Header = () => (
  <div className="home-header">
    <Navbar />
    <div className="background-image">
      <div className="content">
        <p className="pretitle">NORTH TEXAS</p>
        <h1 className="title">Families In Transition Professionals</h1>
        <h2>Encouraging Healthy Families</h2>
      </div>
    </div>
  </div>
);

/**
 * Navigation buttons
 */
const Navbar = () => (
  <div id="navbar">
    <a href="/"><h2>NTXFIT</h2></a>
    <ul>
      <li className="active"><p>Home</p><div className="line" /></li>
      <li><p>Who We Are</p><div className="line" /></li>
      <li><p>Events</p><div className="line" /></li>
      <li><p>Resources</p><div className="line" /></li>
    </ul>
  </div>
);

export default Header;
