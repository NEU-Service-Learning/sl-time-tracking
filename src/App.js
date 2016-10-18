import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './pages/Home'
import Login from './pages/Login'
import Wrapper from './components/Wrapper'

class App extends Component {
  render() {
    return (
			<Router history={browserHistory}>
		    <Route path="/" component={Wrapper}>
					<IndexRoute component={Home} />
					<Route path="/login" component={Login} />
		    </Route>
		  </Router>
    );
  }
}

export default App
