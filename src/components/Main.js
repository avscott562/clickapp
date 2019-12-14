import React from 'react';
import Card from './Card';
import "../styles/main.css";

function Main() {
    return (
        <div className="container">
            <div className="card-deck">

            </div>
            <div className="row row-cols-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
  }
  
  export default Main;