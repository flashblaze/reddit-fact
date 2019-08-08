const subReducer = (newSub = 'facts', action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT':
      return {
        newSub: action.payload,
        isLoaded: false
      };
    default:
      return { newSub, isLoaded: false };
  }
};

export default subReducer;
