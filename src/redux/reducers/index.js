import { combineReducers } from 'redux'

import { studentReducer } from './student'

export default combineReducers({
  student: studentReducer,
})
