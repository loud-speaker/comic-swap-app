import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Match extends Component {

  static propTypes = {
    match: PropTypes.object
  };
  
  render() { 
    const { match } = this.props;

    return (
      <section>
        {match.comic}
      </section>
    );
  }
}
 
export default connect(
  null
)(Match);