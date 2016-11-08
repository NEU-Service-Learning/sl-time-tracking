const defaultState = {
  admin: false,
}

export function authReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'SET_ADMIN': {
      return {
        ...state,
        admin: payload,
      }
    }
    default: {
      return state
    }
  }
}
