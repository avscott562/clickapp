import React from 'react';
import "../styles/navbar.css";

function Navbar() {
    return (
        <div class="navbar sticky-top">
            <div>
                <a href="/" class="navbar-brand">Clicky Game</a>
            </div>
            <div>Click an image to begin!</div>
            <ul id="scores" class="nav nav-fill">
                <li class="score-section nav-item">
                    Score: <span id="current-score">0</span>
                </li>
                <li class="score-section nav-item">|</li>
                <li class="nav-item">
                    Top Score: <span id="high-score">0</span>
                </li>
            </ul>
            
        </div>
    );
  }
  
  export default Navbar;