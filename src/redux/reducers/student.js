import moment from 'moment'

import {
  STUDENT_ADD_TIME_LOADING,
  STUDENT_ADD_TIME_SUCCESS,
  STUDENT_ADD_TIME_ERROR,
  STUDENT_EDIT_TIME,
} from '../actions/action-types.js'

const date = moment(new Date())
const prevDate = moment(new Date()).subtract(1, 'hours')

const defaultState = {
  loading: false,
  error: null,
  firstName: '',
  lastName: '',
  time: {
    loading: false,
    error: null,
    to: date.format('h:mm'),
    toPeriod: date.format('a'),
    from: prevDate.format('h:mm'),
    fromPeriod: prevDate.format('a'),
    startDate: moment(),
    endDate: moment(),
  },
}

export function studentReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case STUDENT_EDIT_TIME: {
      return {
        ...state,
        time: {
          ...state.time,
          ...payload,
        },
      }
    }
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
