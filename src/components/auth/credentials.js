import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

class Credentials extends PureComponent {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state)
      .catch(() => {});
  };
  
  render() { 
    const { action } = this.props;
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={StyleSheet.credentials}>
        <FormControl label="Email">
          <input name="email" type="email" value={email} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl label="Password">
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