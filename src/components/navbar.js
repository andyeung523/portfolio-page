import React, { Component } from 'react';

class Navbar extends Component {
  render() { 
    return ( 
  <nav class="navbar  navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <ul class="nav navbar-nav ">
        <li><a href="#hi">Home</a></li>
        <li><a href="#aboutMe">About me</a></li>
        <li><a href="#college">Where I learn</a></li>
        <li><a href="#know">What I know</a></li>
        <li><a href="#contact">contact</a></li>

      </ul>
    </div>
  </nav>
    );
  }
}
 
export default Navbar;