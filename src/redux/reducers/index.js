import { combineReducers } from 'redux'

import { studentReducer } from './student'
import { authReducer } from './auth'
import { appReducer } from './app'

export default combineReducers({
  student: studentReducer,
  auth: authReducer,
  app: appReducer,
})
