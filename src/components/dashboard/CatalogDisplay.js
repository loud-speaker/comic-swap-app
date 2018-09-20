import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CatalogItem from './CatalogItem';
import { getUserCatalog } from './reducers';
import { loadUserCatalog } from './actions';

class CatalogDisplay extends PureComponent {

  static propTypes = {
    catalog: PropTypes.array,
  };
  
  componentDidMount() {
    this.props.loadUserCatalog();
  }
  
  render() { 
    const { catalog } = this.props;
    
    return (
      <section>
        {catalog.length > 0 &&
      <Fragment>
        {catalog.map(catalogItem =>
          <CatalogItem
            catalogItem={catalogItem}
            key={catalogItem._id}
          />)}
      </Fragment>
        }
      </section>
    );
  }
}
 
export default connect(
  state => ({
    catalog: getUserCatalog(state)
  }),
  { loadUserCatalog }
)(CatalogDisplay);