import React from 'react';
import { Link } from 'react-router-dom';
import './GlobalNav.css';
import appLogo from './app-icon.png';

const GlobalNav = () =>
  <nav className="navbar navbar-default" id="global-nav" tabIndex="-1">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="department-text">
            <Link to="/" title="Angels Dice Apps - Home">
              <img src={appLogo} alt="Site logo" /> Site Name
            </Link>
          </div>
        </div>
        <div className="col-6 text-right" />
      </div>
    </div>
  </nav>;

export default GlobalNav;
