import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CatalogItem from './CatalogItem';

class CatalogDisplay extends Component {

  static propTypes = {
    catalog: PropTypes.array,
  };
  
  
  render() { 
    const { catalog } = this.props;
    
    return (
      <section>
        <h3>User CatalogDisplay Component</h3>
        {catalog.map(catalogItem =>
          <CatalogItem
            catalogItem={catalogItem}
            key={catalogItem._id}
          />)}
        
      </section>
    );
  }
}
 
export default CatalogDisplay;