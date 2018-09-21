import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CatalogDisplay from './CatalogDisplay';
import { getUser } from '../auth/reducers';
import styles from './Dashboard.css';

class Dashboard extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
  };
  
  render() { 
    const { user } = this.props;
    
    return (
      <section className={styles.dashboard}>
        <div className="catalog-header">
          <img className="img" src={user.avatar}/>
          <h2 className="name"></h2>
          <h2 className="welcome">{user.username} Welcome To Your Comic Collection!</h2>
        </div>
        <div className="catalog-display">
          <CatalogDisplay/>
        </div>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
  }), null
)(Dashboard);