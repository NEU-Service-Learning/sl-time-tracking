import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import { studentReducer } from './student'
import { authReducer } from './auth'
import { appReducer } from './app'
import { modalReducer } from './modal'

export default combineReducers({
  student: studentReducer,
  auth: authReducer,
  app: appReducer,
  modal: modalReducer,
  routing: routerReducer,
})
