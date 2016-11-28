const defaultState = {
  classes: [
    {
      name: 'Class A',
      semester: 'Fall 2016',
      dateCreated: '1480344337772',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, neque quis dictum porttitor, dui augue ultrices tellus, quis lobortis massa arcu nec dolor. Nulla eu urna et nisi accumsan convallis.',
    },
    {
      name: 'Class B',
      semester: 'Fall 2016',
      dateCreated: '1480344383681',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, neque quis dictum porttitor, dui augue ultrices tellus, quis lobortis massa arcu nec dolor. Nulla eu urna et nisi accumsan convallis.',
    },
  ],
}

export function classReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'ADD_CLASS': {
      return {
        ...state,
        classes: state.classes.concat(payload),
      }
    }
    default: {
      return state
    }
  }
}
