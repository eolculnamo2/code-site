const initialState = {
  text: '',
  featuredArticles: [
    {
      name: 'VueJS for Beginners',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet aliquet nisi ut tristique. Sed et egestas risus, nec sodales odio. Mauris et nulla interdum arcu ultricies dapibus.',
      image: `${window.location.origin}/assets/js-photo.png`,
    },
    {
      name: 'Advanced SCSS Course',
      description: 'Vestibulum sagittis, erat ac bibendum molestie, lectus dui malesuada velit, sed mattis ante magna in arcu. Donec sagittis pellentesque tincidunt. Integer leo arcu, mattis et blandit id, laoreet ut libero. Integer fermentum arcu a turpis ultricies, et tincidunt lorem cursus. Nunc ac pulvinar turpis.',
      image: `${window.location.origin}/assets/js-photo.png`,
    },
  ],
  featuredTutorials: [
    {
      name: 'VueJS for Beginners',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet aliquet nisi ut tristique. Sed et egestas risus, nec sodales odio. Mauris et nulla interdum arcu ultricies dapibus.',
    },
    {
      name: 'Advanced SCSS Course',
      description: 'Vestibulum sagittis, erat ac bibendum molestie, lectus dui malesuada velit, sed mattis ante magna in arcu. Donec sagittis pellentesque tincidunt. Integer leo arcu, mattis et blandit id, laoreet ut libero. Integer fermentum arcu a turpis ultricies, et tincidunt lorem cursus. Nunc ac pulvinar turpis.',
    },
  ],
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
