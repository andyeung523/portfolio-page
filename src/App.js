import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import College from './components/College';
import Contact from './components/Contact';
import Greeting from './components/Greeting';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting/>
      <About/>
      <College/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
