const defaultState = {
  loading: false,
  error: null,
  courses: [],
}
export function courseReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'COURSES_LOADING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'COURSES_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        courses: payload,
      }
    }
    default: {
      return state
    }
  }
}
