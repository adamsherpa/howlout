/* eslint-disable import/no-named-default */
import React from 'react';

// importing assets
import { default as Navbar } from './components/Header';
import Board from './components/Board';
import bg from '../public/bg.png';
import './App.scss';

function App() {
  return (
    <div id="main" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div id="content">
        <div id="shoutouts">
          <Board />
        </div>
        <div id="form-container">
          <form>
            <input type="text" placeholder="Shoutout!" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
