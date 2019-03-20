import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/layout/Header/Header';
import Home from './components/page/Home/Home';
import Footer from './components/layout/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
