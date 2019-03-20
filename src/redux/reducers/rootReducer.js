const initialState = {
  text: '',
  featuredArticles: ['Article 1'],
  featuredTutorials: ['Tutorial 1'],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default rootReducer;
