const defaultState = {
  loading: false,
  error: null,
  sections: [],
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
    case 'COURSES_SECTIONS_SUCCESS': {
      return {
        ...state,
        sections: payload,
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
