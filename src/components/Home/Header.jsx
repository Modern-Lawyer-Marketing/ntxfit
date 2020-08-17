import React from 'react';
import '../../styles/home-header.scss';

/**
 * Header
 */
const Header = () => (
  <div className="home-header">
    <Navbar />
    <div className="content">
      <p className="pretitle">NORTH TEXAS</p>
      <h1 className="title">Families In Transition Professionals</h1>
      <h2>Encouraging Healthy Families</h2>
      <br />
      {/* eslint-disable-next-line max-len */}
      <p>The North Texas Families in Transition Professionals Workgroup is a volunteer organization of independent licensed professionals who practice around the metroplex. Our members specialize in working with families dealing with separation, divorce, co-parenting, and other situations involving raising children between multiple homes.</p>
    </div>
  </div>
);

/**
 * Navigation buttons
 */
const Navbar = () => {
  /**
   * Reveals nav when scrolling from top
   */
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('navbar').classList.add('expanded');
    } else {
      document.getElementById('navbar').classList.remove('expanded');
    }
  }

  window.onscroll = function () { scrollFunction(); };

  return (
    <div id="navbar">
      <ul>
        <li className="active"><p>Home</p><div className="line" /></li>
        <li><p>Events</p><div className="line" /></li>
        <li><p>Who We Are</p><div className="line" /></li>
        <li><p>Resources</p><div className="line" /></li>
      </ul>
    </div>
  );
};

export default Header;
