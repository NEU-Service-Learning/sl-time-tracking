import { GET } from '../api'

export const getCourses = () => dispatch => {
  dispatch({ type: 'COURSES_LOADING' })
  GET('/courses/')
  .then(data => dispatch({ type: 'COURSES_SUCCESS', payload: data }))
}
