import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.scss';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Navigation bar
 */
const Navbar = () => {
  const { isMobile } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const hamburgerMenu = useRef();

  useEffect(() => {
    document.body.classList.toggle('hamburger-open', open);

    /**
     * Checks if user clicked outside hamburger menu
     */
    function hasClickedOutside(e) {
      if (!hamburgerMenu.current.contains(e.target)) {
        setOpen(false);
        document.removeEventListener('click', hasClickedOutside);
      }
    }

    if (open) {
      document.addEventListener('click', hasClickedOutside);
    }
  }, [open]);

  return (
    <div id="navbar">
      <a href="/"><h2>NTXFIT</h2></a>
      {isMobile
        ? <Hamburger open={open} setOpen={setOpen} />
        : <NavItems />}
      <HamburgerMenu hamburgerMenu={hamburgerMenu} open={open} />
    </div>
  );
};

/**
 * Hamburger button
 */
const Hamburger = ({ open, setOpen }) => (
  <button onClick={() => setOpen(!open)} id="hamburger">
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
  </button>
);

/**
 * Mobile menu, opened when pressing hamburger
 */
const HamburgerMenu = ({ open, hamburgerMenu }) => (
  <div id="hamburger-menu" ref={hamburgerMenu} className={open ? 'open' : ''}>
    <NavItems />
  </div>
);

/**
 * Navigation items
 */
const NavItems = () => (
  <ul id="nav-items">
    <li className="active"><p>Home</p><div className="line" /></li>
    <li><p>Who We Are</p><div className="line" /></li>
    <li><p>Events</p><div className="line" /></li>
    <li><p>Resources</p><div className="line" /></li>
  </ul>
);

export default Navbar;
