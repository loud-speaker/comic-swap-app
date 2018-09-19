import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
  
  render() { 

    return (
      <footer className={styles.footer}>
        <div class="halftone">
        <img src="https://placebear.com/100/100.jpg"/>
        </div>
        
      </footer>
    );
  }
}
 
export default Footer;