const defaultState = {
  loading: false,
  error: null,
  users: []
}
export function adminReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'USERS_LOADING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'USERS_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        users: payload,
      }
    }
    default: {
      return state
    }
  }
}
