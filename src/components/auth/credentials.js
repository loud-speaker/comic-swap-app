import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';
import { avatar1, avatar2, avatar3, avatar4, avatar5 } from '../../assets/constants'; 
import { avatar6, avatar7, avatar8, avatar9 } from '../../assets/constants';
import styles from './credentials.css';

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
    const { email, password, zip, username } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.credentials}>

        <FormControl>
          <label className="emailLabel">Email:</label>
          <input className="emailForm" name="email" type="email" value={email} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl>
          <label className="passLabel">Password:</label>
          <input className="passForm" name="password" type="password" value={password} onChange={this.handleChange} required></input>
        </FormControl>

        {(action === 'Sign Up') &&
          
        <Fragment>
           <div className="signUpForm2">
            <FormControl label="Zip Code">
              <input name="zip" type="number" pattern="(\d{5}([\-]\d{4})?)" value={zip} onChange={this.handleChange} required></input>
            </FormControl>
            <FormControl label="Username">
              <input name="username" type="text" value={username} onChange={this.handleChange} required></input>
            </FormControl>
            <label>Pick An Avatar:</label>
            <div className="pickAvatar1">
              <input onChange={this.handleChange} id="avatar1" type="radio" name="avatar" value={avatar1} className="input-hidden"></input>
              <label htmlFor="avatar1">
                <img src={avatar1} className="avatar" alt="Avatar"/>
              </label>

              <input onChange={this.handleChange} id="avatar2" type="radio" name="avatar" value={avatar2} className="input-hidden"></input>
              <label htmlFor="avatar2">
                <img src={avatar2} className="avatar" alt="Avatar"/>
              </label>

              <input onChange={this.handleChange} id="avatar3" type="radio" name="avatar" value={avatar3} className="input-hidden"></input>
              <label htmlFor="avatar3">
                <img src={avatar3} className="avatar" alt="Avatar"/>
              </label>
            <div className="pickAvatar2">
              <input onChange={this.handleChange} id="avatar4" type="radio" name="avatar" value={avatar4} className="input-hidden"></input>
              <label htmlFor="avatar4">
                <img src={avatar4} className="avatar" alt="Avatar"/>
              </label>

              <input onChange={this.handleChange} id="avatar5" type="radio" name="avatar" value={avatar5} className="input-hidden"></input>
              <label htmlFor="avatar5">
                <img src={avatar5} className="avatar" alt="Avatar"/>
              </label>

              <input onChange={this.handleChange} id="avatar6" type="radio" name="avatar" value={avatar6} className="input-hidden"></input>
              <label htmlFor="avatar6">
                <img src={avatar6} className="avatar" alt="Avatar"/>
              </label>
            </div>

              <input onChange={this.handleChange} id="avatar7" type="radio" name="avatar" value={avatar7} className="input-hidden"></input>
              <label htmlFor="avatar7">
                <img src={avatar7} className="avatar" alt="Avatar"/>
              </label>

              <input onChange={this.handleChange} id="avatar8" type="radio" name="avatar" value={avatar8} className="input-hidden"></input>
              <label htmlFor="avatar8">
                <img src={avatar8} className="avatar" alt="Avatar"/>
              </label>

              <input onChange={this.handleChange} id="avatar9" type="radio" name="avatar" value={avatar9} className="input-hidden"></input>
              <label htmlFor="avatar9">
                <img src={avatar9} className="avatar" alt="Avatar"/>
              </label>
            </div>
           </div>
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