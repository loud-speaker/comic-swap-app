import React, { PureComponent, Fragment } from 'react';
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
    let userZipData = zipcodes.lookup(user.zip);
    let defaultLocation;
    if(userZipData === undefined) defaultLocation = { city: 'Portland', state: 'OR', zip: 97201, message: 'Your zip was not found.' };
    
    return (
      <div>
        {userZipData
          ? <Fragment>
            <h2 style={{ textAlign: 'center' }}>{userZipData.message}</h2>
            <h2 style={{ textAlign: 'center' }}>Check out some local comic stores in {userZipData.city}, {userZipData.state}!</h2>
            <iframe width="600" height="450" frameBorder="0" style={{ border: 0 }} src={'https://www.google.com/maps/embed/v1/search?q=comic%20book%20store%20near%20' + (userZipData.zip || user.zip) + '&key=AIzaSyBHViEFI_2ar58Eh4MNJFf-DJwUg2GaJfg'} allowFullScreen></iframe>
          </Fragment>
          : <Fragment>
            <h2 style={{ textAlign: 'center' }}>{defaultLocation.message}</h2>
            <h2 style={{ textAlign: 'center' }}>Check out some local comic stores in {defaultLocation.city}, {defaultLocation.state}!</h2>
            <iframe width="600" height="450" frameBorder="0" style={{ border: 0 }} src={'https://www.google.com/maps/embed/v1/search?q=comic%20book%20store%20near%20' + (defaultLocation.zip || user.zip) + '&key=AIzaSyBHViEFI_2ar58Eh4MNJFf-DJwUg2GaJfg'} allowFullScreen></iframe>
          </Fragment>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state),
  }), null
)(MapResults);