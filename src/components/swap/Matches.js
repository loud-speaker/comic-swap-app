import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Match from './Match';
import { getMatches } from './reducers';
import { loadMatches } from './actions';

class Matches extends Component {

  static propTypes = {
    matches: PropTypes.array,
    loadMatches: PropTypes.func
  };

  componentDidMount() {
    this.props.loadMatches();
  }
  
  render() { 
    const { matches } = this.props; 

    return (
      <section>
        <h4>Matches</h4>
        
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
    matches: getMatches(state)
  }),
  { loadMatches }
)(Matches);