import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import Auth from '../auth/auth';
import styles from './App.css';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';

import Header from './Header';
import About from '../about/About';
import ComicsList from '../comics/ComicsList';
import Swap from '../swap/Swap';
import Dashboard from '../dashboard/Dashboard';
import Footer from './Footer';
import MapResults from './MapResults';

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
                <Route path="/about" component={About}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/swap" component={Swap}/>
                <Route path="/me" component={Dashboard}/>
                <Route path="/map" component={MapResults}/>
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