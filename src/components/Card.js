import React from 'react';
import "../styles/card.css";

function Card(props) {
    return (
        <div className="col-3">
            <div className="tile mb-3">
                <img className="tile-image" src={props.src} data-id={props.id} alt={props.alt} isClicked={props.isClicked}></img>
            </div>
        </div>
    );
  }
  
  export default Card;