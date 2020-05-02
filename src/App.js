import React from 'react';
import logo from './logo.png';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)//あらかじめ使用するアイコンを追加しておく



function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="App_logo"><a href="index.html">samemaru</a></h1>
        <nav className="global-nav">
          <li className="nav_item" ><a href="#">WORK</a></li>
          <li className="nav_item" ><a href="#">ABOUT</a></li>
          <li className="nav_item" ><a href="https://twitter.com/samemaru_saxo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
        </nav>
      </header>
      <div className="wrapper">
        <img src={logo} className="App_icon" alt="App_icon" />  
      </div>
    </div>
  );
}

export default App;
