import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

// import { Router, Route ,Link} from 'react-router'

import Login from './components/login';
import Home from './components/home/index';
import BackPassword from './components/backPassword';


// import { browserHistory } from 'react-router';
// import createHistory from 'history/createBrowserHistory';
// import Editpassword from './components/editpassword/edit';
// const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
            {/* <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} /> */}
            
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />


            <Route path="/backPassword" component={BackPassword} />
          </div>
        </Router>
    )
  }
}

export default App;
