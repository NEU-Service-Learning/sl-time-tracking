import { GET } from '../api'

export const getProjects = () => dispatch => {
  dispatch({ type: 'PROJECTS_LOADING' })
  GET(`/projects/`)
  .then(data => dispatch({ type: 'PROJECTS_SUCCESS', payload: data }))
  .catch(err => dispatch({ type: 'PROJECTS_ERROR', payload: err }))
}
export const getStudentsOnProject = (id) => dispatch => {
  dispatch({ type: 'PROJECTS_STUDENTS_LOADING' })
  GET(`/project/${id}/students/`)
  .then(data => dispatch({ type: 'PROJECTS_STUDENTS_SUCCESS', payload: data }))
  .catch(err => dispatch({ type: 'PROJECTS_STUDENTS_ERROR', payload: err }))
}
