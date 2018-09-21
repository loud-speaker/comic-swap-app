import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ComicResult from './ComicResult';
import styles from './ComicsDisplay.css';

class ComicsDisplay extends PureComponent {
  
  static propTypes = {
    comics: PropTypes.array,
  };

  render() {
    const { comics } = this.props;

    return (
      <div className={styles.comics}>
        {comics.map(comic => (
          <ComicResult
            key={comic.comicId}
            comic={comic}
          />
        ))}
        <p>Comic data courtesy of <a href="https://comicvine.gamespot.com/">Comic Vine</a></p>
      </div>
    );
  }
}


export default ComicsDisplay;