import React from 'react';
import "../styles/navbar.css";

function Navbar() {
    return (
        <div className="navbar sticky-top">
            <div>
                <a href="/" className="navbar-brand">Clicky Game</a>
            </div>
            <div>Click an image to begin!</div>
            <ul id="scores" className="nav nav-fill">
                <li className="score-section nav-item">
                    Score: <span id="current-score">0</span>
                </li>
                <li className="score-section nav-item">|</li>
                <li className="nav-item">
                    Top Score: <span id="high-score">0</span>
                </li>
            </ul>
            
        </div>
    );
  }
  
  export default Navbar;