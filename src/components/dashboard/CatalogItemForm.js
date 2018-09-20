import { own, trade, wishlist, good, fine, mint } from '../../assets/constants';

import React, { PureComponent } from 'react';
import styles from './CatalogItemForm.css';
import PropTypes from 'prop-types';

export default class CatalogItemForm extends PureComponent {

    state = {
      condition: '',
      exchange: ''
    };
  
    static propTypes = {
      submit: PropTypes.func,
      onCancel: PropTypes.func,
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.submit(this.state);
    };

    handleCancel = event => {
      event.preventDefault();
      this.props.onCancel();
    };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit} className={styles.catalogItemForm}>
          <input onChange={this.handleChange} id="good" type="radio" name="condition" value="Good" className="input-hidden"></input>
          <label htmlFor="good">
            <img src={good} className="condition" alt="Condition: Good"/>
          </label>

          <input onChange={this.handleChange} id="fine" type="radio" name="condition" value="Fine" className="input-hidden"></input>
          <label htmlFor="fine">
            <img src={fine} className="condition" alt="Condition: Fine"/>
          </label>

          <input onChange={this.handleChange} id="mint" type="radio" name="condition" value="Mint" className="input-hidden"></input>
          <label htmlFor="mint">
            <img src={mint} className="condition" alt="Condition: Mint"/>
          </label>

          <input onChange={this.handleChange} id="own" type="radio" name="exchange" value="Own" className="input-hidden"></input>
          <label htmlFor="own">
            <img src={own} className="exchange" alt="Exchange Status: Own"/>
          </label>

          <input onChange={this.handleChange} id="trade" type="radio" name="exchange" value="Trade" className="input-hidden"></input>
          <label htmlFor="trade">
            <img src={trade} className="exchange" alt="Exchange Status: Trade"/>
          </label>

          <input onChange={this.handleChange} id="wishlist" type="radio" name="exchange" value="Wishlist" className="input-hidden"></input>
          <label htmlFor="wishlist">
            <img src={wishlist} className="exchange" alt="Exchange Status: Wishlist"/>
          </label>

          <button>Save</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      );
    }
}
