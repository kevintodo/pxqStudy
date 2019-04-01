
import React, {Component} from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import home from '../pages/home/home'

export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </Router>
    )
  }
}