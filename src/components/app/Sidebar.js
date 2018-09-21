import React, { PureComponent } from 'react';
import styles from './Sidebar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../auth/actions';
class Sidebar extends PureComponent {

  static propTypes = {
    logout: PropTypes.func,
  };
  
  handleLogout = () => {
    this.props.logout();
  };

  render() {

    return (
      <header className={styles.sidebar}>
        <div className="area"></div>
        <nav className="main-menu">
          <ul>
            <li className="has-subnav">
              <a href="/me">
                <i className="fas fa-home fa-2x"></i>
                <span className="nav-text">
              Dashboard
                </span>
              </a>      
            </li>
            <li>
              <a href="/">
                <i className="fas fa-search fa-2x"></i>
                <span className="nav-text">
              Search
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="/swap">
                <i className="fas fa-book fa-2x"></i>
                <span className="nav-text">
              Swap
                </span>
              </a>      
            </li>
            <li className="has-subnav">
              <a href="/about">
                <i className="fas fa-info-circle fa-2x"></i>
                <span className="nav-text">
              About
                </span>
              </a>
            </li>
          </ul>

          <ul className="topOfPage">
            <li onClick={this.handleLogout}>
              <a>
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">
              Logout
                </span>
              </a>
            </li>  
          </ul>
        </nav>
      </header>
    );
  }
}

export default connect(
  null,
  { logout }
)(Sidebar);