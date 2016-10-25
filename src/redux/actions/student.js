import {
  STUDENT_ADD_TIME_LOADING,
  STUDENT_ADD_TIME_SUCCESS,
  STUDENT_ADD_TIME_ERROR,
} from './action-types.js'

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
