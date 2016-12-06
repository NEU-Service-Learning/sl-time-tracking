const auth = localStorage.getItem('key')

const defaultState = {
  admin: false,
  loading: false,
  error: {},
  loggedIn: !!auth,
  token: auth,
  user: { enrollments: {}},
}

export function authReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'LOGIN_LOADING': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'USER_INFO': {
      return {
        ...state,
        user: payload,
      }
    }
    case 'AUTH_RESET': {
      console.log('reset');
      return {
        ...state,
        loggedIn: false,
        token: '',
      }
    }
    case 'LOGIN_SUCCESS': {
      localStorage.setItem('key', payload)
      return {
        ...state,
        loggedIn: true,
        error: {},
        loading: false,
        token: payload,
      }
    }
    case 'LOGIN_ERROR': {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: payload,
      }
    }
    default: {
      return state
    }
  }
}
