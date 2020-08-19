import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.scss';
import { Link, withRouter } from 'react-router-dom';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Navigation bar
 */
const Navbar = ({ location }) => {
  const { isMobile } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const hamburgerMenu = useRef();
  const hamburger = useRef();
  const path = location.pathname;

  useEffect(() => {
    document.body.classList.toggle('hamburger-open', open);

    /**
     * Checks if user clicked outside hamburger menu
     */
    function hasClickedOutside(e) {
      if (!hamburgerMenu.current.contains(e.target) && !hamburger.current.contains(e.target)) {
        setOpen(false);
        document.removeEventListener('click', hasClickedOutside, true);
      }
    }

    if (open) {
      document.addEventListener('click', hasClickedOutside, true);
    }

    return () => {
      document.removeEventListener('click', hasClickedOutside, true);
    };
  }, [open]);

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <div id="navbar">
      <a className="logo" href="/"><h2>NTXFIT</h2></a>
      {isMobile
        ? <Hamburger hamburger={hamburger} open={open} setOpen={setOpen} />
        : <NavItems path={path} setOpen={setOpen} />}
      <HamburgerMenu path={path} hamburgerMenu={hamburgerMenu} setOpen={setOpen} open={open} />
    </div>
  );
};

/**
 * Hamburger button
 */
const Hamburger = ({ open, setOpen, hamburger }) => (
  <button ref={hamburger} onClick={() => setOpen(!open)} id="hamburger">
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
  </button>
);

/**
 * Mobile menu, opened when pressing hamburger
 */
const HamburgerMenu = ({ open, hamburgerMenu, path, setOpen }) => (
  <div id="hamburger-menu" ref={hamburgerMenu} className={open ? 'open' : ''}>
    <NavItems path={path} setOpen={setOpen} />
  </div>
);

/**
 * Navigation items
 */
const NavItems = ({ path, setOpen }) => (
  <ul id="nav-items">
    <Link onClick={() => setOpen(false)} to="/"><li className={path === '/' ? 'active' : ''}><p>Home</p><div className="line" /></li></Link>
    <Link onClick={() => setOpen(false)} to="/who-we-are"><li className={path === '/who-we-are' ? 'active' : ''}><p>Who We Are</p><div className="line" /></li></Link>
    <Link onClick={() => setOpen(false)} to="/events"><li className={path === '/events' ? 'active' : ''}><p>Events</p><div className="line" /></li></Link>
    <Link onClick={() => setOpen(false)} to="/resources"><li className={path === '/resources' ? 'active' : ''}><p>Resources</p><div className="line" /></li></Link>
  </ul>
);

export default withRouter(Navbar);
