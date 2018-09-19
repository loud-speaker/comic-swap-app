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
      </div>
    );
  }
}


export default ComicsDisplay;