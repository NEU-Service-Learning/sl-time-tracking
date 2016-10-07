import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './pages/Home'
import Wrapper from './components/Wrapper'

class App extends Component {
  render() {
    return (
			<Router history={browserHistory}>
		    <Route path="/" component={Wrapper}>
					<IndexRoute component={Home} />
		    </Route>
		  </Router>
    );
  }
}

export default App
