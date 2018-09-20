import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadOneComic, addComic, addCatalog } from './actions';
import { getUser } from '../auth/reducers';
import styles from './ComicResult.css';

class ComicResult extends PureComponent {
  static propTypes = {
    comic: PropTypes.object.isRequired,
    user: PropTypes.object
  };


  handleAdd = comicId => {
    const { user, comic, loadOneComic, addComic } = this.props;
    comicId = comic.comicId;
    // const catalog = { userId: user._id, comicId: comic._id, condition: 'Unknown' };
    return loadOneComic(comicId)
      .then(data => {
        data.payload.user = user._id;
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
  state => ({
    user: getUser(state)
  }),
  { loadOneComic, addComic, addCatalog }
)(ComicResult);
