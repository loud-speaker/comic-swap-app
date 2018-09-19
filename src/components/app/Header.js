import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import PropTypes from 'prop-types';

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
      <div className={styles.header}>
        <nav id="nav-ul">
          <ul>
            <li>
              {user &&
                <Fragment>
                  <NavLink to="/">Comics&nbsp;</NavLink>
                  <NavLink to="/" onClick={this.handleLogout}>Logout</NavLink>
                </Fragment>
              }
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { logout }
)(Header);