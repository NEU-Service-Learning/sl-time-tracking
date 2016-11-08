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
    expect(studentReducer(undefined, {}).firstName).toEqual('')
    expect(studentReducer(undefined, {}).lastName).toEqual('')
  })

  it('is the correct state after loading', () => {
    expect(studentReducer(undefined, { type: STUDENT_ADD_TIME_LOADING }).error)
    .toEqual(defaultState.error)
  })

  it('is the correct state after a success', () => {
    expect(studentReducer(undefined, { type: STUDENT_ADD_TIME_SUCCESS }).loading)
    .toEqual(true)
    })
  })

  it('is the correct state after an error', () => {
    expect(studentReducer(undefined, { type: STUDENT_ADD_TIME_ERROR, payload: 'error' }).loading)
    .toEqual(true)
})
