import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import Index from './views/index.jsx'
import User from './views/user.jsx'
import Login from './views/login.jsx'

import './scss/main.scss'

import rootReducer from './reducers/reducers'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
          <div className="app">
            {this.props.children}
          </div>
        )
    }
}

// Store
const store = createStore(rootReducer);

render((
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="index" component={Index} />
        <Route path="user" component={User} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));