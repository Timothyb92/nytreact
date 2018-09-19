import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Articles from './pages/Articles';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Articles />
        </div>
      </Router>
    );
  }
}

export default App;
