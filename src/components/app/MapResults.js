import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import zipcodes from 'zipcodes';

class MapResults extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
  };
  
  
  render() {
    const { user } = this.props;
    const userZipData = zipcodes.lookup(user.zip);
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Check out some local comic stores in {userZipData.city}, {userZipData.state}!</h2>
        <iframe width="600" height="450" frameBorder="0" style={{ border: 0 }} src={'https://www.google.com/maps/embed/v1/search?q=comic%20book%20store%20near%20' + user.zip + '&key=AIzaSyBHViEFI_2ar58Eh4MNJFf-DJwUg2GaJfg'} allowFullScreen></iframe>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state),
  }), null
)(MapResults);