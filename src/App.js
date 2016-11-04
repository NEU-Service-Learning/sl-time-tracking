import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './pages/Home'
import Login from './pages/Login'
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
						<Route path="/login" component={Login} />
					</Route>
				</Router>
			</Provider>
    );
  }
}

export default App
