import { GET, POST } from '../api'

export const getEnrollmentsForCourse = (name) => dispatch => {
  dispatch({ type: 'ENROLLMENTS_LOADING' })
  GET(`/enrollments/crn/${name}/`)
  .then(data => dispatch({ type: 'ENROLLMENTS_SUCCESS', payload: data }))
  .catch(err => dispatch({ type: 'ENROLLMENTS_ERROR', payload: err }))
}

export const addEnrollment = (enrollment) => dispatch => {
  dispatch({ type: 'ENROLLMENTS_ADD_LOADING' })
  POST('/enroll/', enrollment)
  .then(data => dispatch({ type: 'ENROLLMENTS_ADD_SUCCESS', payload: data }))
  .catch(err => dispatch({ type: 'ENROLLMENTS_ADD_ERROR', payload: err }))
}
