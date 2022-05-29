// import './App.css';
import React, { Component } from 'react';
// import axios from 'axios';2
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';


import Header from './component/Header';
import routes from './component/routee';
class App extends Component {
  render() {
    return (
      <div className='container'>
      <BrowserRouter>
      <Header/>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.main} exact={route.exact} />
          )
          )}
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;