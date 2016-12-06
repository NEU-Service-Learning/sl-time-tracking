import { GET } from '../api'

export const getEnrollmentsForCourse = (name) => dispatch => {
  dispatch({ type: 'ENROLLMENTS_LOADING' })
  GET(`/enrollments/crn/${name}/`)
  .then(data => dispatch({ type: 'ENROLLMENTS_SUCCESS', payload: data }))
  .catch(err => dispatch({ type: 'ENROLLMENTS_ERROR', payload: err }))
}
