import React, { Component } from 'react';
import styles from './Footer.css';
class Footer extends Component {
  
  render() { 

    return (
      <section className={styles.footer}>
        <p>Comic data courtesy of <a href="https://comicvine.gamespot.com/">Comic Vine</a></p>
        <p>Avatar illustration by <a href="https://ddianahernandez.com//">Diana Hernandez</a></p>
      </section>
    );
  }
}
 
export default Footer;