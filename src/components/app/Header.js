import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <Fragment>
        <div className={styles.header}>
         <h1>Comic Swap</h1>
          <button><NavLink to="/" onClick={this.handleLogout}>Logout</NavLink></button>
          <Sidebar/>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { logout }
)(Header);