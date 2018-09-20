import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CatalogDisplay from './CatalogDisplay';
import { getUserCatalog } from './reducers';
import { loadUserCatalog } from './actions';

class Dashboard extends Component {

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
        <h3>User Dashboard Component</h3>
        <CatalogDisplay
          catalog={catalog}
        />
      </section>
    );
  }
}
 
export default connect(
  state => ({
    catalog: getUserCatalog(state)
  }),
  { loadUserCatalog }
)(Dashboard);