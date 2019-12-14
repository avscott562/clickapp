import React from 'react';
import "../styles/card.css";

function clicked() {
    if(!this.isClicked) {
        this.isClicked = true;
    } else {
        console.log('game over!');
    }
}

function Card(props) {
    return (
        <div className="col-3">
            <div className="tile mb-3">
                <img 
                    className="tile-image" 
                    src={props.src} 
                    data-id={props.id} 
                    alt={props.alt} 
                    isClicked={props.isClicked}></img>
            </div>
        </div>
    );
  }
  
  export default Card;