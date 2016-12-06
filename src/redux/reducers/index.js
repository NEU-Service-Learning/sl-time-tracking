import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import { studentReducer } from './student'
import { authReducer } from './auth'
import { appReducer } from './app'
import { modalReducer } from './modal'
import { classReducer } from './class'
import { courseReducer } from './courses'
import { projectsReducer } from './projects'

export default combineReducers({
  student: studentReducer,
  auth: authReducer,
  app: appReducer,
  modal: modalReducer,
  class: classReducer,
  courses: courseReducer,
  projects: projectsReducer,
  routing: routerReducer,
})
