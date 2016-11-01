import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './pages/Home/Home'
import Wrapper from './components/Wrapper'
import configureStore from './redux/store'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
  			<Router history={browserHistory}>
  		    <Route path="/" component={Wrapper}>
  					<IndexRoute component={Home} />
  		    </Route>
  		  </Router>
      </Provider>
    );
  }
}

export default App
