import {
  STUDENT_ADD_TIME_LOADING,
  STUDENT_ADD_TIME_SUCCESS,
  STUDENT_ADD_TIME_ERROR,
} from '../actions/action-types.js'

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

export function studentReducer (state = defaultState, { type, payload }) {
  switch (type) {
    // Loading when you click add time
    case STUDENT_ADD_TIME_LOADING: {
      return {
        ...state,
        time: {
          loading: true,
          error: null,
        }
      }
    }
    // Success after adding time
    case STUDENT_ADD_TIME_SUCCESS: {
      return {
        ...state,
        time: {
          loading: false,
          error: null,
        }
      }
    }
    // Error after you tried to add time
    case STUDENT_ADD_TIME_ERROR: {
      return {
        ...state,
        time: {
          loading: false,
          error: payload,
        }
      }
    }
    default: {
      return state
    }
  }
}
