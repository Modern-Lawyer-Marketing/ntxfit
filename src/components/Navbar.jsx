import React from 'react';
import '../styles/navbar.scss';

/**
 * Navigation bar
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

export default Navbar;
