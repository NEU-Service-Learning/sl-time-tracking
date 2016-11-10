import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore  } from 'react-router-redux';

import Home from './pages/Home/Home'
import EnterTime from './pages/EnterTime/EnterTime'
import Settings from './pages/Settings/Settings'
import Wrapper from './components/Wrapper'
import Classes from './pages/Classes/Classes'
import AddClasses from './pages/Classes/AddClasses'


import configureStore from './redux/store'

const store = configureStore()
const syncHistory = syncHistoryWithStore(browserHistory, store)

const paths = {
  ROOT: '/',
  ENTER_TIME: '/enter-time',
  SETTINGS: '/settings',
  CLASSES: '/classes',
  ADD_CLASSES: '/add-classes',
};

const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: Wrapper,
    childRoutes: [
      {
        indexRoute: {
          component: Home,
          onEnter: getState,
        },
      },
      {
        path: paths.ENTER_TIME,
        component: EnterTime,
      },
      {
        path: paths.SETTINGS,
        component: Settings,
      },
      {
        path: paths.ADD_CLASSES,
        component: AddClasses,
      },
      {
        path: paths.CLASSES,
        component: Classes,
      },
    ],
  };
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router dispatch={store.dispatch} history={syncHistory} routes={getRoutes(store.getState)} />
      </Provider>
    );
  }
}

export default App
