import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { loadUserMatches } from './actions';
import Matches from './Matches';
import styles from './Swap.css';

class Swap extends Component {

  static propTypes = {
    user: PropTypes.object,
  };
  
  render() { 
    const { user } = this.props;

    return (
      <section className={styles.swap}>
        {user &&
        <Fragment>
          <article>
            <h2>{user.username}&apos;s Matches</h2>
            <img src={user.avatar}/>
          </article>

          <article>
            <h1>Let's Swap!</h1>
            <h2>These collectors have comics on your wishlist:</h2>
            <Matches/>
          </article>
        </Fragment>
        }
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
  }), { loadUserMatches }
)(Swap);