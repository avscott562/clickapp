import React from 'react';
import "../styles/navbar.css";

function Navbar() {
    return (
        <div class="navbar">
            <div class="nav">
                <a class="nav-link" href="/">Clicky Game</a>
            </div>
            <div>Click an image to begin!</div>
            <div id="scores">
                <span class="score-section">
                    <span>Score: </span>
                    <span id="current-score">0</span>
                </span>
                <span class="score-section">|</span>
                <span>
                    <span class="score-section">Top Score: </span>
                    <span id="high-score">0</span>
                </span>
            </div>
            
        </div>
    );
  }
  
  export default Navbar;