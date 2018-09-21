import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';

export default class SearchForm extends PureComponent {
  static propTypes = {
    submit: PropTypes.func,
  };

  state = {
    keyword: 'X-men',
    limit: '10',
    dateStart: '1950-01-01',
    dateEnd: '2020-01-01'
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { keyword, dateStart, dateEnd } = this.state;
    return (
      <div className={styles.SearchForm}>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <label className="searchFormLabel">Keyword Search:</label>
              <input id="keywordInput"
                type="text"
                label="Keyword Search"
                name="keyword"
                value={keyword}
                onChange={this.handleChange}
                placeholder="Search for keyword"
              />
          </div>
          <div>
            <label className="searchFormLabel">
            Limit Results:
              <input
                type="radio"
                label="Limit Results"
                name="limit"
                value="10"
                onChange={this.handleChange}
              />10
              <input
                type="radio"
                label="Limit Results"
                name="limit"
                value="20"
                onChange={this.handleChange}
              />20
              <input
                type="radio"
                label="Limit Results"
                name="limit"
                value="50"
                onChange={this.handleChange}
              />50
            </label>
          </div>
          <div>
            <label className="searchFormLabel">
              Date Range
              <input
                type="date"
                label="Start Date"
                name="dateStart"
                value={dateStart}
                onChange={this.handleChange}
              />
              <input
                type="date"
                label="End Date"
                name="dateEnd"
                value={dateEnd}
                onChange={this.handleChange}
              />
            </label>
          </div>  
            <button className="searchBtn" type="submit">Search</button> 
          </form>
        </div>
    );
  }
}
