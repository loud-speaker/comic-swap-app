import React, { Component } from 'react';
import styles from './Footer.css';
import { mint } from '../../assets/constants';

class Footer extends Component {
  
  render() { 

    return (
      <footer className={styles.footer}>
        <div className="halftone">
          <img src={mint} className="condition" alt="Condition: Mint"/>
        </div>
      </footer>
    );
  }
}
 
export default Footer;