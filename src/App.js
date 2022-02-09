import React, { Component } from 'react';
import Hero from './hero';
import NavBar from './navbar';
import SideBar from './sidebar';
import Submenu from './submenu';

function App() {
  return (
    <div>
      <NavBar />
      <Submenu />
      <SideBar />
      <Hero />
    </div>
  );
}

export default App;