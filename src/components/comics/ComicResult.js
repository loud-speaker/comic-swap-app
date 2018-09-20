import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadOneComic, addComic } from './actions';
import styles from './ComicResult.css';

class ComicResult extends PureComponent {
  static propTypes = {
    comic: PropTypes.object.isRequired
  };


  handleAdd = comicId => {
    const { comic, loadOneComic, addComic } = this.props;
    comicId = comic.comicId;
    return loadOneComic(comicId)
      .then(data => {
        addComic(data.payload);
      });
  };

  handleWishlist = comicId => {
    console.log('TO-DO: WRITE FUNCTION');
  };

  render() {
    const { comic } = this.props;
    return (
      <div className={styles.comic}>
        <div className="media">
          <div className="cover">
            <img src={comic.image}/>
          </div>
          <h2 className="title">Title: {comic.name}</h2>
          <p className="details">Cover Date: {comic.coverDate}</p>
          <div className="footer">
            <button onClick={this.handleAdd}>Add To Collection</button>
            <button onClick={this.handleWishlist}>Wishlist</button>
          </div>

          <p className="devonly">(#{comic.comicId})</p>
        
        </div>
      </div>

    );
  }
}


export default connect(
  null,
  { loadOneComic, addComic }
)(ComicResult);
