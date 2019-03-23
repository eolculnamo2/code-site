import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Articles from './components/page/Articles/Articles';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Home from './components/page/Home/Home';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
