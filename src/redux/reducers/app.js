const defaultState = {
  navToggled: false,
}

export function appReducer (state = defaultState, { type, payload }) {
  switch (type) {
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
