import React from 'react';
import "../styles/header.css";

function Header() {
    return (
        <div className="jumbotron center">
            <h1 id="title">Clicky Game!</h1>
            <br />
            <h4>Click on an image to earn points, but don't click on any more than once!</h4>
        </div>
    );
  }
  
  export default Header;