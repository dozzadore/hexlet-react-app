import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
