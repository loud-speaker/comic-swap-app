import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';
import styles from './credentials.css';

class Credentials extends PureComponent {

  static PropTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.email]: target.value });
  };

  handleSubmit = e => {
    console.log('HERE');
    e.preventDefault();
    this.props.submit(this.state)
      .catch(() => {});
  };
  
  render() { 
    const { action } = this.props;
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={StyleSheet.credentials}>
       <FormControl label="email">
          <input name="email" type="email" value={email} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl label="password">
          <input name="password" type="password" value={password} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}
 export default Credentials;