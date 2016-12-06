import { POST } from '../api'

export const addRecord = (record) => dispatch => {
  console.log(record);
  dispatch({ type: 'RECORD_LOADING' })
  POST('/record/', record)
  .then((payload) => dispatch({ type: 'RECORD_SUCCESS', payload }))
  .catch((payload) => payload.then(err => dispatch({ type: 'RECORD_ERROR', payload: err })))
}
