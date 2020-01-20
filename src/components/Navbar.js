import React, { Component } from 'react';
import "../styles/navbar.css";

function Navbar(props) {
    return (
        <div className="navbar sticky-top">
            <div>
                <a href="/" className="navbar-brand">Clicky Game</a>
            </div>
            <h1>Click an image to begin!</h1>
            <ul id="scores" className="nav nav-fill">
                <li className="score-section nav-item">
                    Score: <span id="current-score"> { props.current }</span>
                </li>
                <li className="score-section nav-item">|</li>
                <li className="nav-item">
                    Top Score: <span id="high-score">{ props.high }</span>
                </li>
            </ul>
            
        </div>
    );
  }
  
  export default Navbar;