import React, { Component } from 'react';
import Matches from './Matches';

class Swap extends Component {
  
  render() { 

    return (
      <section>
        <h3>Swap Component</h3>

        <div>
          User

        </div>

        <div>
          Matches
          <Matches />
        </div>
      </section>
    );
  }
}
 
export default Swap;