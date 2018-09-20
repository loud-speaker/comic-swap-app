import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CatalogDisplay from './CatalogDisplay';
import { getUserCatalog } from './reducers';
import { getUser } from '../auth/reducers';
import { loadUserCatalog } from './actions';

class Dashboard extends Component {

  static propTypes = {
    catalog: PropTypes.array,
  };

  componentDidMount() {
    this.props.loadUserCatalog();
  }
  
  render() { 
    const { catalog, user } = this.props;
    
    return (
      <section>
        <h3>{user.username}&apos;s Collection</h3>
        <img src={user.avatar}/>
        <CatalogDisplay
          catalog={catalog}
        />
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
    catalog: getUserCatalog(state)
  }),
  { loadUserCatalog }
)(Dashboard);