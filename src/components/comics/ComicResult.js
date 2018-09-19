import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadOneComic } from './actions';
import styles from './ComicResult.css';

class ComicResult extends PureComponent {
  static propTypes = {
    comic: PropTypes.object.isRequired
  };

  handleAdd = comicId => {
    const { comic } = this.props;
    comicId = comic.comicId;
    this.props.loadOneComic(comicId);
  };

  handleWishlist = comicId => {
    console.log('TO-DO: WRITE FUNCTION');
  };

  render() {
    const { comic } = this.props;
    return (
      <div className={styles.comic}>
        <img src={comic.image}/>
        <p>Title: {comic.name}</p>
        <p>Cover Date: {comic.coverDate}</p>
        <p>(#{comic.comicId})</p>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleWishlist}>Wishlist</button>
      </div>
    );
  }
}

export default connect(
  null,
  { loadOneComic }
)(ComicResult);