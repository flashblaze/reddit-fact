import React from 'react';

import { ReactComponent as GitHub } from '../svg/github.svg';
import { ReactComponent as Heart } from '../svg/heart.svg';

const Info = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto mt-8">
        <h3 className="text-2xl text-gray-900 text-center">
          You can view the code here{' '}
          <a href="https://github.com/FlashBlaze/reddit-fact" target="blank">
            {' '}
            <GitHub
              className="hover:text-blue-600"
              style={{ display: 'inline-block' }}
            />
          </a>
        </h3>
      </div>
      <div className="max-w-sm mx-auto mt-6">
        <h6 className="text-md text-gray-900 text-center">
          Made with{' '}
          <Heart
            className="stroke-current hover:text-red-500"
            style={{ display: 'inline-block', height: '20px' }}
          />{' '}
          by Neeraj Lagwankar
        </h6>
      </div>
    </div>
  );
};

export default Info;
