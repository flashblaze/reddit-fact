const subReducer = (state = 'facts', action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT':
      return {
        state: action.payload
      };
    default:
      return { state };
  }
};

export default subReducer;
