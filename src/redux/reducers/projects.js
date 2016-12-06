const defaultState = {
  loading: false,
  error: null,
  studentsError: null,
  studentsLoading: false,
  projects: [],
  students: [],
}
export function projectsReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'PROJECTS_LOADING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'PROJECTS_STUDENTS_LOADING': {
      return {
        ...state,
        studentsLoading: true,
      }
    }
    case 'PROJECTS_STUDENTS_ERROR': {
      return {
        ...state,
        studentsLoading: false,
        studentsError: payload,
      }
    }
    case 'PROJECTS_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        projects: payload,
      }
    }
    case 'PROJECTS_STUDENTS_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        studentsLoading: false,
        students: payload,
      }
    }
    case 'PROJECTS_ERROR': {
      return {
        ...state,
        error: payload,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
