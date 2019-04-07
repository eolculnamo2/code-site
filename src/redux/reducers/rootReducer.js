const initialState = {
  text: '',
  featuredArticles: [
    {
      name: 'VueJS for Beginners',
      description: 'If you\'re like me, you want the very basics of how to get started with a technology so that you can begin building and experimenting right away (its the best way to learn). This tutorial offers you a simple example of the core basics of Vue without spending time on parts that are not essential to building your first app.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1920px-Vue.js_Logo_2.svg.png',
      link: '/vue-for-beginners',
    },
    {
      name: 'Building Scalable Projects with Front End JavaScript Frameworks',
      description: 'For anyone who has worked with a large and complicated front end code base, you’ll be able to relate to the feeling of having to do things over and over again, finding excessive amounts of copied and pasted code, and different functions in different places which ultimately do the same thing. ',
      image: 'https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: '/scalable-javascript',
    },
    {
      name: 'Advanced SCSS Course',
      description: 'Vestibulum sagittis, erat ac bibendum molestie, lectus dui malesuada velit, sed mattis ante magna in arcu. Donec sagittis pellentesque tincidunt. Integer leo arcu, mattis et blandit id, laoreet ut libero. Integer fermentum arcu a turpis ultricies, et tincidunt lorem cursus. Nunc ac pulvinar turpis.',
      image: `${window.location.origin}/assets/js-photo.png`,
      link: '/vue-for-beginners',
    },
  ],
  featuredTutorials: [
    {
      name: 'VueJS for Beginners',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet aliquet nisi ut tristique. Sed et egestas risus, nec sodales odio. Mauris et nulla interdum arcu ultricies dapibus.',
      link: '/vue-tutorial-1',
    },
    {
      name: 'Advanced SCSS Course',
      description: 'Vestibulum sagittis, erat ac bibendum molestie, lectus dui malesuada velit, sed mattis ante magna in arcu. Donec sagittis pellentesque tincidunt. Integer leo arcu, mattis et blandit id, laoreet ut libero. Integer fermentum arcu a turpis ultricies, et tincidunt lorem cursus. Nunc ac pulvinar turpis.',
      link: '/vue-tutorial-1',
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
