import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComics } from './reducers';
import { loadComics } from './actions';

import SearchForm from './SearchForm';
import ComicsDisplay from './ComicsDisplay';

class ComicsList extends PureComponent {
  
  static propTypes = {
    comics: PropTypes.array,
  };

  handleSearch = (params) => {
    this.props.loadComics(params);
  };

  render() {
    const { comics } = this.props;
    return (
      <div>
        <SearchForm submit={this.handleSearch}/>
        {comics.length > 0
          ? <ComicsDisplay comics={comics}/>
          : <p>Search for comics!</p>
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