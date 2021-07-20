import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import AllFeeds from './AllFeeds';
import MyTweets from './MyTweets';
import history from './history'

class Routes extends React.Component {
  render() {
        return (
            <Router history={history}>
              <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/allFeeds" component={AllFeeds} />
                    <Route exact path="/myTweets" component={MyTweets} />
                </Switch>
            </Router>
          );
        }
}

export default Routes;
