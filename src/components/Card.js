import React, { Component } from 'react';
import "../styles/card.css";
import { render } from '@testing-library/react';

// function clicked(isClicked) {
//     if( !isClicked ) {
//         return true
//     } 
// }


class Card extends Component {
    render() {
        const { id, src, alt, isClicked } = this.props.image
        return (
            <div className="col-3">
                <div className="tile mb-3">
                    <img 
                        className="tile-image" 
                        src={src} 
                        data-id={id} 
                        alt={alt} 
                        data-clicked={isClicked}
                        onClick={this.props.imageClicked.bind(this, id)}
                    />
            
                </div>
            </div>
        );
    }

  }
  
  export default Card;