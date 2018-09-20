import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CatalogItem from './CatalogItem';

class UserCatalog extends Component {

  static propTypes = {
    catalog: PropTypes.array
  };
  
  render() { 
    const { catalog } = this.props;

    return (
      <div>
        {catalog.map(item => (
          <CatalogItem 
            key={catalog._id}
            item={item}
          />
        ))}
      </div>
    );
  }
}
 
export default UserCatalog;
