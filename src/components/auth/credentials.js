import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';
import { avatar1, avatar2 } from '../../assets/collection';

class Credentials extends PureComponent {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: '',
    zip: '',
    username: '',
    avatar: ''
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
    const { email, password, zip, username, avatar } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={StyleSheet.credentials}>
        <FormControl label="Email">
          <input name="email" type="email" value={email} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl label="Password">
          <input name="password" type="password" value={password} onChange={this.handleChange} required></input>
        </FormControl>

        {(action === 'Sign Up') &&
          <Fragment>
            <FormControl label="Username">
              <input name="username" type="text" value={username} onChange={this.handleChange} required></input>
            </FormControl>

            <FormControl label="Avatar">
              <input name="avatar1" type="radio" value={avatar1} onChange={this.handleChange} required></input>
               
            </FormControl>

            <FormControl label="Zip Code">
              <input className="avatar" name="zip" type="number" pattern="(\d{5}([\-]\d{4})?)" value={zip} onChange={this.handleChange} required></input>
            </FormControl>
          </Fragment>
        }

        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}
export default Credentials;