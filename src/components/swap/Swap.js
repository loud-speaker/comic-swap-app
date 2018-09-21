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
          <h3>Swap Component</h3>

          <article>
            <h3>{user.username}&apos;s Matches</h3>
            <img src={user.avatar}/>
          </article>

          <article>
            Matches
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