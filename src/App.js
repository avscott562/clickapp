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
    this.setState({ images: this.shuffleImages(images) });
  }

  handleIncrement = () => {
      let count = this.state.currentScore + 1;
      this.setState({ currentScore: count });
      if (count >= this.state.topScore) {
        this.setState({ topScore: count });
    }
  }

  shuffleImages = (arr) => {
    let randomIndex;
    let temp;
    for (let i=0; i<arr.length; i++) {
      temp = arr[i];
      randomIndex = Math.floor(Math.random() * (i+1));
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
    console.log(arr);
    return arr;
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
    return this.setState({ images: this.shuffleImages(images) });
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
