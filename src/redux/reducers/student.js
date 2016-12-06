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
  success: false,
  firstName: '',
  lastName: '',
  record: {
    loading: false,
    error: {},
    data: null,
  },
  time: {
    comments: '',
    selectedService: '',
    selectedProject: '',
    selectedType: '',
    selectedCourse: '',
    selectedEnrollment: '',
    start: {
      hours: prevDate.format('hh'),
      minutes: prevDate.format('mm'),
      period: prevDate.format('a'),
      date: moment(),
    },
    end: {
      hours: date.format('hh'),
      minutes: date.format('mm'),
      period: date.format('a'),
      date: moment(),
    },
    hours: 0,
    toReset: date.format('h:mm'),
    fromReset: prevDate.format('h:mm'),
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
    case 'STUDENT_RESET_SUCCESS': {
      return {
        ...state,
        success: false,
      }
    }
    // Loading when you click add time
    case STUDENT_ADD_TIME_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    // Success after adding time
    case STUDENT_ADD_TIME_SUCCESS: {
      return {
        ...state,
        loading: true,
        success: true,
        error: null,
      }
    }
    // Error after you tried to add time
    case STUDENT_ADD_TIME_ERROR: {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case 'RECORD_LOADING': {
      return {
        ...state,
        record: {
          ...state.record,
          loading: true,
          error: {},
        }
      }
    }
    case 'RECORD_SUCCESS': {
      console.log('success');
      return {
        ...state,
        success:  true,
        record: {
          loading: false,
          error: {},
          data: payload,
        }
      }
    }
    case 'RECORD_ERROR': {
      return {
        ...state,
        record: {
          ...state.record,
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
