import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { addTime } from '../../src/redux/actions/student'
import {
  STUDENT_ADD_TIME_LOADING,
  STUDENT_ADD_TIME_SUCCESS,
  STUDENT_ADD_TIME_ERROR,
} from '../../src/redux/actions/action-types.js'

const mockStore = configureMockStore([ thunk ])

describe('Student actions', () => {
  it('succesfully dispatches STUDENT_ADD_TIME_SUCCESS', () => {
    const expectedActions = [
      { type: STUDENT_ADD_TIME_LOADING },
      { type: STUDENT_ADD_TIME_SUCCESS }
    ]
    const store = mockStore()
    return store.dispatch(addTime('testID', 'testTime'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('succesfully dispatches STUDENT_ADD_TIME_ERROR', () => {
    const expectedActions = [
      { type: STUDENT_ADD_TIME_LOADING },
      { type: STUDENT_ADD_TIME_ERROR, payload: 'Error: need class id and Time' }
    ]
    const store = mockStore()
    return store.dispatch(addTime())
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
