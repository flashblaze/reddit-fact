import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSub } from '../../actions/index';

const InputSub = () => {
  const [subreddit, setSubreddit] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    setSubreddit('');
    dispatch(setSub(subreddit));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="bg-white focus:outline-none border focus:shadow-md border-gray-300 rounded-lg py-2 px-4 block max-w-md appearance-none leading-normal mx-auto mt-24"
          type="text"
          placeholder="Enter subreddit"
          value={subreddit}
          onChange={e => setSubreddit(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputSub;
