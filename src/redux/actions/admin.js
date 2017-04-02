import { GET } from '../api'

export const getUsersInfo = () => dispatch => {
  dispatch({ type: 'USERS_LOADING' })
  GET('/users/')
  .then(data => dispatch({ type: 'USERS_SUCCESS', payload: data }))
}