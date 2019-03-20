import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="Header__main-wrap">
    <h2 className="Header__title">
      Code Life
    </h2>
    <ul className="Header__links-wrap">
      <li>Home</li>
      <li>Articles</li>
      <li>Tutorials</li>
      <li>About</li>
    </ul>
  </div>
);


export default Header;
