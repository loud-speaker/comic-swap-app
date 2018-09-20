import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUserCatalog } from './actions';
import { getUserCatalog } from '../../services/catalogApi';
import UserCatalog from './CatalogDisplay';

class Dashboard extends Component {

  static propTypes = {
    catalog: PropTypes.array
  };

  componentDidMount() {
    this.props.loadUserCatalog();
  }
  
  render() { 
    const { catalog } = this.props;
    
    return (
      <section>
        <h3>User Dashboard Component</h3>
        <UserCatalog 
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