import React, { Component } from 'react';
import Sidebar from './Sidebar';

import styles from './Header.css';

export default class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <h1>Comic Swap</h1>
        <Sidebar/>
      </div>
    );
  }
}
