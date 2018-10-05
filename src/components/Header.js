import React from 'react';

const Header = () => (
  <header className="Header">
    <h1 className="Header__Brand">
      <span className="Header__Brand--yellow">#</span>
      <span className="Header__Brand">EBM</span>
      <span className="Header__Brand--red">NAO</span>
    </h1>
    <img className="Header__CRF" src="./../images/crf.jpg" />
  </header>
);

export default Header;
