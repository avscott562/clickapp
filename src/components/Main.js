import React, { Component } from 'react';
import Card from './Card';
import "../styles/main.css";


class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="tile-deck">

                </div>
                <div className="row row-cols-3">
                    {
                        this.props.images.map((image) => {
                            return <Card 
                                key={image.id}
                                image={image}
                                imageClicked={this.props.imageClicked}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
  }
  
  export default Main;