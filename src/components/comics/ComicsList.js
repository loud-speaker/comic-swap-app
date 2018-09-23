import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComics } from './reducers';
import { getLoading } from '../app/reducers';
import { loadComics } from './actions';

import SearchForm from './SearchForm';
import ComicsDisplay from './ComicsDisplay';
import Loading from '../shared/Loading';

class ComicsList extends PureComponent {
  
  static propTypes = {
    comics: PropTypes.array,
  };

  handleSearch = (params) => {
    this.props.loadComics(params);
  };

  render() {
    const { comics, loading } = this.props;

    return (
      <div id="comicSearch">
        <SearchForm submit={this.handleSearch}/>
        {loading &&
          <Loading/>
        }
        {comics.length > 0 && !loading &&
          <ComicsDisplay comics={comics}/>
        }
        {comics.length < 1 && !loading &&
          <h2>Search For Comics...</h2>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    comics: getComics(state),
    loading: getLoading(state)
  }),
  { loadComics }
)(ComicsList);