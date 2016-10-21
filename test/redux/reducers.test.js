import { studentReducer } from '../../src/redux/reducers/student'
import {
  STUDENT_ADD_TIME_LOADING,
  STUDENT_ADD_TIME_SUCCESS,
  STUDENT_ADD_TIME_ERROR,
} from '../../src/redux/actions/action-types.js'

const defaultState = {
  loading: false,
  error: null,
  firstName: '',
  lastName: '',
  time: {
    loading: false,
    error: null,
  },
}

describe('Student reducers', () => {
  it('should return the initial state', () => {
    expect(studentReducer(undefined, {})).toEqual(defaultState)
  })

  it('is the correct state after loading', () => {
    expect(studentReducer(undefined, { type: STUDENT_ADD_TIME_LOADING }))
    .toEqual({
      ...defaultState,
      time: {
        loading: true,
        error: null,
      }
    })
  })

  it('is the correct state after a success', () => {
    expect(studentReducer(undefined, { type: STUDENT_ADD_TIME_SUCCESS }))
    .toEqual({
      ...defaultState,
      time: {
        loading: false,
        error: null,
      }
    })
  })

  it('is the correct state after an error', () => {
    expect(studentReducer(undefined, { type: STUDENT_ADD_TIME_ERROR, payload: 'error' }))
    .toEqual({
      ...defaultState,
      time: {
        loading: false,
        error: 'error',
      }
    })
  })
})
