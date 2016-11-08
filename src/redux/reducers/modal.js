const defaultState = {
  modals: [],
  key: 0,
}

export function modalReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'ADD_MODAL': {
      return {
        ...state,
        modals: state.modals.concat([{ ...payload, key: state.key + 1 }]),
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        modals: state.modals.filter(modal => modal.key !== payload),
      }
    }
    case 'RESET_MODAL': {
      return {
        ...state,
        key: 0,
        modals: [],
      }
    }
    default: {
      return state
    }
  }
}
