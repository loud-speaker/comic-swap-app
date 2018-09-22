import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import zipcodes from 'zipcodes';
import styles from './Match.css';

class Match extends Component {

  static propTypes = {
    match: PropTypes.object,
    user: PropTypes.object,
  };
  
  render() { 
    const { match, user } = this.props;
    let userZipData;
    if(match.user.zip) userZipData = zipcodes.lookup(match.user.zip);

    return (
      <section className={styles.Match}>
        {match.user.zip &&
        <Fragment>
          <article>
            <div className="userAvatar">
              <img src={match.user.avatar}/>
            </div>
            <h2>User:</h2>
            <p>{match.user.username}</p>
            <a href={'mailto:' + user.email + '?subject=Comic-Swap Trade offer:' + ' ' + match.comic.issueName}><button>Email User</button></a>
          </article>

          <div>
            <h2 style={{ textAlign: 'center' }}>{match.user.username} is located in {userZipData.city}, {userZipData.state}</h2>
            <iframe width="400" height="300" frameBorder="0" style={{ border: 0 }} src={'https://www.google.com/maps/embed/v1/search?q=comic%20book%20store%20near%20' + user.zip + '&key=AIzaSyBHViEFI_2ar58Eh4MNJFf-DJwUg2GaJfg'} allowFullScreen></iframe>
          </div>
          
          <div className="comicCover">
            <img src={match.comic.image}/>
          </div>
          <h2>Issue:</h2>
          <p>{match.comic.issueName}</p>
          <h2>Volume:</h2>
          <p>{match.comic.volumeName}</p>
          <h2>Cover Date:</h2>
          <p>{match.comic.coverDate}</p>
          <h2>Condition:</h2>
          <h3>{match.condition}</h3>
          <h2>Status:</h2>
          <h3>{match.exchange}</h3>
        </Fragment>
        }
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state)
  })
)(Match);