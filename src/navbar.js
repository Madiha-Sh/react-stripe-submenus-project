import React, { Component, useRef } from 'react';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempCrd = e.target.getBoundingClientRect();
    const center = (tempCrd.left + tempCrd.right)/2;
    const bottom = tempCrd.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/13-stripe-submenus/final/src/images/logo.svg' alt="logo" className='nav-logo'/>
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
}
 
export default NavBar;