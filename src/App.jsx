import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Articles from './components/page/Articles/Articles';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Home from './components/page/Home/Home';
import VueForBeginners from './components/page/ArticlePages/VueForBeginners/VueForBeginners';
import ScalableJS from './components/page/ArticlePages/ScalableJS/ScalableJS';
import {
  VueTut1,
  VueTut2,
} from './components/page/TutorialPages/VueTutorial';


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

          {/* Articles */}
          <Route exact path="/vue-for-beginners" component={VueForBeginners} />
          <Route exact path="/scalable-javascript" component={ScalableJS} />

          {/* Tutorials */}
          <Route exact path="/vue-tutorial-1" component={VueTut1} />
          <Route exact path="/vue-tutorial-2" component={VueTut2} />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
