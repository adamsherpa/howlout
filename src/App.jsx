/* eslint-disable import/no-named-default */
import React from 'react';

// importing assets
import { default as Navbar } from './components/Header';
// import MessageBoard from './components/MessageBoard';
// import Login from './routes/Login';
import Signup from './routes/Signup';
import bg from '../public/bg.png';
import './styles/App.scss';
import Footer from './components/Footer';

function App() {
  return (
    <div id="main" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
}
export default App;
