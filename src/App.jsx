import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import updateText from './redux/actions/textUpdates';
import './App.scss';
import Header from './components/layout/Header/Header';
import Home from './components/page/Home/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { changeText, text } = this.props;
    return (
      <>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
        <h1>{text}</h1>
        <input onChange={changeText.bind(this)} />
      </>
    );
  }
}

App.defaultProps = {
  text: '',
  changeText: '',
};

App.propTypes = {
  text: PropTypes.string,
  changeText: PropTypes.func,
};

const mapStateToProps = state => ({
  text: state.text,
});

const dispatchStateToProps = dispatch => ({
  changeText: e => dispatch(updateText(e.target.value)),
});

export default connect(mapStateToProps, dispatchStateToProps)(App);
