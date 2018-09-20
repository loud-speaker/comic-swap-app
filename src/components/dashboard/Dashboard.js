import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CatalogDisplay from './CatalogDisplay';
import { getUser } from '../auth/reducers';

class Dashboard extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
  };
  
  render() { 
    const { user } = this.props;
    
    return (
      <section>
        <h3>{user.username}&apos;s Collection</h3>
        <img src={user.avatar}/>
        <CatalogDisplay/>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
  }), null
)(Dashboard);