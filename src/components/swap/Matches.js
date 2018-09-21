import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Match from './Match';
import { getUser } from '../auth/reducers';
import { getUserMatches } from './reducers';
import { loadUserMatches } from './actions';

class Matches extends Component {

  static propTypes = {
    user: PropTypes.object,
    loadUserMatches: PropTypes.func,
    matches: PropTypes.array,
  };

  componentDidMount() {
    const { user } = this.props;
    this.props.loadUserMatches(user._id);
  }
  
  render() { 
    const { matches } = this.props; 

    return (
      <section>
        {matches &&
          <Fragment>
            {matches.map(match => (
              <Match 
                match={match}
                key={match._id}
              />
            ))}
          </Fragment>
        }
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
    matches: getUserMatches(state)
  }),
  { loadUserMatches }
)(Matches);