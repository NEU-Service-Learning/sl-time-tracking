import { push } from 'react-router-redux'

import {
  STUDENT_ADD_TIME_LOADING,
  STUDENT_ADD_TIME_SUCCESS,
  STUDENT_ADD_TIME_ERROR,
} from './action-types.js'
import { GET } from '../api'


export function addTime(classId, time) {
  return dispatch => {
    dispatch({ type: STUDENT_ADD_TIME_LOADING })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (classId && time) {
          resolve(dispatch({ type: STUDENT_ADD_TIME_SUCCESS }))
        } else {
          reject(dispatch({ type: STUDENT_ADD_TIME_ERROR, payload: 'Error: need class id and Time' }))
        }
      }, 500)
    })
  }
}

export function getMyInfo () {
  return dispatch => {
    if (!localStorage.getItem('key')) return null
    GET('/me/')
    .then(user => dispatch({ type: 'USER_INFO', payload: user }))
    .catch(err => {
      err.then(error => {
        dispatch({ type: 'AUTH_RESET' })
        dispatch(push('/login'))
      })
    })
  }
}
