import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.scss';
import { Link, withRouter } from 'react-router-dom';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Navigation bar
 */
const Navbar = ({ location }) => {
  const { isMobile, width } = useWindowDimensions();
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
    <div id="navbar" className={open ? 'open' : ''}>
      <a className="logo" href="/">
        <img src={width < 400 ? require('../images/logo.png') : require('../images/logo-horizontal.png')} alt="NTXFIT Logo" />
      </a>
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
  <button ref={hamburger} type="button" onClick={() => setOpen(!open)} id="hamburger">
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
  </button>
);

/**
 * Mobile menu, opened when pressing hamburger
 */
const HamburgerMenu = ({ open, hamburgerMenu, path, setOpen }) => (
  <div id="hamburger-menu" ref={hamburgerMenu} className={open ? 'open' : 'closed'}>
    <NavItems hamburger path={path} setOpen={setOpen} open={open} />
  </div>
);

/**
 * Navigation items
 */
const NavItems = ({ path, setOpen, open, hamburger }) => {
  const [dropdown, setDropdown] = useState();
  const dropdownRef = useRef();
  const resourceRef = useRef();

  useEffect(() => {
    /**
     * Checks if user clicked outside hamburger menu
     */
    function hasClickedOutside(e) {
      if (!dropdownRef.current.contains(e.target) && !resourceRef.current.contains(e.target)) {
        setDropdown(false);
        document.removeEventListener('click', hasClickedOutside, true);
      }
    }

    if (dropdown) {
      document.addEventListener('click', hasClickedOutside, true);
    }

    return () => {
      document.removeEventListener('click', hasClickedOutside, true);
    };
  }, [dropdown]);

  /**
   * Closes hamburger menu, scrolls to top, and closes dropdowns
   */
  function onClickLink() {
    setOpen(false);
    window.scroll(0, 0);
    setDropdown(false);
  }

  return (
    <ul id="nav-items">
      <Link onClick={onClickLink} tabIndex={!open && hamburger ? '-1' : null} to="/">
        <li className={path === '/' ? 'active' : ''}>
          <p>Home</p>
          <div className="line" />
        </li>
      </Link>
      <Link onClick={onClickLink} tabIndex={!open && hamburger ? '-1' : null} to="/about-us">
        <li className={path === '/about-us' ? 'active' : ''}>
          <p>About Us</p>
          <div className="line" />
        </li>
      </Link>
      <Link onClick={onClickLink} tabIndex={!open && hamburger ? '-1' : null} to="/events">
        <li className={path === '/events' ? 'active' : ''}>
          <p>Events</p>
          <div className="line" />
        </li>
      </Link>
      <button ref={resourceRef} type="button" onClick={() => { setDropdown(!dropdown); }}>
        <li className={path === '/resources' ? 'active' : ''}>
          <p>Resources <span className={dropdown ? '' : 'rotate'}>⌄</span></p>
          <div className="line" />
        </li>
      </button>

      {dropdown
      && (
      <ResourceMenu
        onClickLink={onClickLink}
        dropdownRef={dropdownRef}
        setOpen={setOpen}
        open={open}
        hamburger={hamburger}
      />
      )}
    </ul>
  );
};

/**
 * Dropdown menu for resources
 */
const ResourceMenu = ({ open, hamburger, dropdownRef, onClickLink }) => (
  <ul ref={dropdownRef} className={`resources-menu ${hamburger ? 'hamburger' : ''}`}>
    <Link onClick={onClickLink} tabIndex={!open && hamburger ? '-1' : null} to="/resources/professional-standards-and-guidelines">
      <li>
        <p>Professional Standards and Guidelines</p>
      </li>
    </Link>
    <Link onClick={onClickLink} tabIndex={!open && hamburger ? '-1' : null} to="/resources/books-and-articles-by-members-of-ntxfit">
      <li>
        <p>Resources by Members of NTXFIT</p>
      </li>
    </Link>
    <Link onClick={onClickLink} tabIndex={!open && hamburger ? '-1' : null} to="/resources/handouts-for-professionals">
      <li>
        <p>Handouts for Professionals</p>
      </li>
    </Link>
    <Link onClick={onClickLink} tabIndex={!open && hamburger ? '-1' : null} to="/resources/resources-for-families">
      <li>
        <p>Resources for Families</p>
      </li>
    </Link>
  </ul>
);

export default withRouter(Navbar);
