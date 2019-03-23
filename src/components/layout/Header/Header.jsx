import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="Header__main-wrap">
    <div className="Global__page-width Header__inner-wrap">
      <h2 className="Header__title">
        Code Life
      </h2>
      <ul className="Header__links-wrap">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </div>
);


export default Header;
