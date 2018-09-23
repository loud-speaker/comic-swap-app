import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import styles from './App.css';

import About from '../about/About';
import Auth from '../auth/auth';
import ComicsList from '../comics/ComicsList';
import Dashboard from '../dashboard/Dashboard';
import Footer from './Footer';
import Header from './Header';
import MapResults from './MapResults';
import PrivateRoute from './PrivateRoute';
import Swap from '../swap/Swap';

class App extends Component {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount(){
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <Router>
        <Fragment>
          <div className={styles.app}>  
            <header>
              <Header/>
            </header>            

            {checkedAuth &&
            <main>
              <Switch>
                <PrivateRoute exact path="/" component={ComicsList}/>
                <PrivateRoute path="/about" component={About}/>
                <Route path="/auth" component={Auth}/>
                <PrivateRoute path="/swap" component={Swap}/>
                <PrivateRoute path="/me" component={Dashboard}/>
                <PrivateRoute path="/map" component={MapResults}/>
                <Redirect to="/"/>
              </Switch>
            </main>

            }
            <footer>
              <Footer/>
            </footer>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);