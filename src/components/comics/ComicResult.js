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
          <div className="img">
            <img src={comic.image}/>
          </div>
          <h2 className="title">{comic.name}</h2>
          <div className="content">
            <p>Issue: {comic.issueName}</p>
            <p>Volume: {comic.volumeName}</p>
          </div>
          <div className="footer">
            <button onClick={this.handleAdd}>➕ Collection</button>
            <button onClick={this.handleWishlist}>➕ Wishlist</button>
            <p className="devonly">(#{comic.comicId})</p>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  null,
  { loadOneComic, addComic }
)(ComicResult);
