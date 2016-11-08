const defaultState = {
  navToggled: false,
  type: '',
}

export function appReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'NAVBAR_ALT': {
      return {
        ...state,
        type: 'alt',
      }
    }
    case 'NAVBAR_DEFAULT': {
      return {
        ...state,
        type: '',
      }
    }
    case 'SET_NAVBAR': {
      return {
        ...state,
        navToggled: payload,
      }
    }
    default: {
      return state
    }
  }
}
