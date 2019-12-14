import React from 'react';
import Card from './Card';
import images from '../images.json';
import "../styles/main.css";


function Main() {
    return (
        <div className="container">
            <div className="tile-deck">

            </div>
            <div className="row row-cols-3">
                {
                    images.map((image) => {
                        return <Card 
                            id={image.id}
                            src={image.src}
                            alt={image.alt}
                            isClicked={image.isClicked}
                        />
                    })
                }
            </div>
        </div>
    );
  }
  
  export default Main;