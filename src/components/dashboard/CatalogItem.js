import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CatalogItem extends Component {

  static propTypes = {
    item: PropTypes.array
  };
  
  render() { 
    const { item } = this.props;

    return (
      <div>
        {item.userId} {item.comicId} {item.condition}
      </div>
    );
  }
}
 
export default CatalogItem;