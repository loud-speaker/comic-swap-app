import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';

class Match extends Component {

  static propTypes = {
    match: PropTypes.object
  };
  
  render() { 
    const { match } = this.props;

    return (
      <section>
        <h1>Match!</h1>
        <article>
          <div className="userAvatar">
            <img src={match.user.avatar}/>
          </div>
          <h2>User:</h2>
          <p>{match.user.username}</p>
          <h2>Email:</h2>
          <p>{match.user.email}</p>
          <h2>Zip:</h2>
          <p>{match.user.zip}</p>
        </article>

    
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
        <h3>{match.comic.condition}</h3>
        <h2>Status:</h2>
        <h3>{match.comic.exchange}</h3>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state)
  })
)(Match);