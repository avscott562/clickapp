import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Card />
    </div>
  );
}

export default App;
