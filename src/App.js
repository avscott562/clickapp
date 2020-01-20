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

  handleIncrement = () => {
      let count = this.state.currentScore + 1;
      this.setState({ currentScore: count });
      if (count >= this.state.topScore) {
        this.setState({ topScore: count });
    }
  }

  imageClicked = (id) => {
    this.setState({ images: this.state.images.map(image => {
      if(image.id === id) {
        if(!image.isClicked) {
          console.log(`${image.alt} has been click ${image.isClicked}`);
          image.isClicked = true;
          this.handleIncrement();
        } else {
          console.log(`${image.alt} has been clicked already!`);
        }
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
          imageClicked={this.imageClicked} 
        />
        <Footer />
      </div>
    );
  }
}


export default App;
