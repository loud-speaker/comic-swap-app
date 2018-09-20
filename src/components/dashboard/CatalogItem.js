import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CatalogItem extends Component {

  static propTypes = {
    catalogItem: PropTypes.object,
  };
  
  
  render() { 
    const { catalogItem } = this.props;
    console.log(catalogItem);
    
    return (
      <section>
        <h3>User CatalogItem Component</h3>
        
      </section>
    );
  }
}
 
export default CatalogItem;