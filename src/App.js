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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          samemaru 
        </p>
        <a href="https://twitter.com/samemaru_saxo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      </header>
    </div>
  );
}

export default App;
