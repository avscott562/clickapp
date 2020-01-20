import React, { Component }  from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import images from './images.json';
import './App.css';



class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    images: []
  }

  componentDidMount() {
    this.setState({ images: images });
  }

  handleIncrement = (isClicked) => {
    if(!isClicked){
      this.setState({ currentScore: this.state.currentScore + 1 });
      if (this.state.currentScore > this.state.topScore) {
        this.setState({ topScore: this.state.currentScore });
      }   
    }
  }

  imageClicked = (id) => {
    this.setState({ images: this.state.images.map(image => {
      if(image.id === id) {
        console.log(image.alt);
        // image.isClicked = !image.isClicked
      }
      return image;
    }) });
  }

  render() {
    return (
      <div className="App">
        <Navbar current={this.state.currentScore} high={this.state.topScore}  />
        <Header />
        <Main 
          images={this.state.images}
          handleIncrement={this.handleIncrement} 
          imageClicked={this.imageClicked} 
        />
        <Footer />
      </div>
    );
  }
}


export default App;
