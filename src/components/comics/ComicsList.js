import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComics } from './reducers';
import { loadComics } from './actions';

import SearchForm from './SearchForm';
import ComicsDisplay from './ComicsDisplay';
import Loading from '../shared/Loading';

class ComicsList extends PureComponent {
  
  static propTypes = {
    comics: PropTypes.array,
  };

  handleSearch = () => {
    this.props.loadComics();
  };

  render() {
    const { comics } = this.props;
    console.log('COMICS', comics);
    return (
      <div>
        <SearchForm submit={this.handleSearch}/>
        {comics
          ? <ComicsDisplay/>
          : <Loading/>
        }
      </div>
    );
  }
}


export default connect(
  state => ({
    comics: getComics(state)
  }),
  { loadComics }
)(ComicsList);