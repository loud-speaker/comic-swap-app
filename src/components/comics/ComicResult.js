import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ComicResult.css';

export default class ComicResult extends PureComponent {
  static propTypes = {
    comic: PropTypes.object.isRequired
  };

  render() {
    const { comic } = this.props;
    return (
      <div className={styles.comic}>
        <img src={comic.image}/>
        <p>Title: {comic.name}</p>
        <p>Cover Date: {comic.coverDate}</p>
        <p></p>
      </div>
    );
  }
}
