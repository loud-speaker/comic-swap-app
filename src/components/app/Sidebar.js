import React, { PureComponent } from 'react';
import styles from './Sidebar.css';

export default class Sidebar extends PureComponent {

handleScroll = (query) => {
  document.querySelector(query).scrollIntoView({ 
    behavior: 'smooth' 
  });
};

render() {

  return (
    <header className={styles.sidebar}>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="/">
              <i className="fas fa-sign-out fa-2x"></i>
              <span className="nav-text">
              Home
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fas fa-home fa-2x"></i>
              <span className="nav-text">
              Home
              </span>
            </a>
          </li>
          <li onClick={() => (this.handleScroll('.about-section'))} className="has-subnav">
            <a href="/about">
              <i className="fas fa-info-circle fa-2x"></i>
              <span className="nav-text">
              About
              </span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/swap">
              <i className="fas fa-camera-retro fa-2x"></i>
              <span className="nav-text">
              Swap
              </span>
            </a>      
          </li>
          <li className="has-subnav">
            <a href="/dashboard">
              <i className="fas fa-boxes fa-2x"></i>
              <span className="nav-text">
              Dashboard
              </span>
            </a>      
          </li>
        </ul>

        <ul className="topOfPage">
          <li onClick={() => (this.handleScroll('.landing-section'))} >
            <a>
              <i className="fas fa-arrow-up fa-2x"></i>
              <span className="nav-text">
              Top
              </span>
            </a>
          </li>  
        </ul>
      </nav>
    </header>
  );
}
}