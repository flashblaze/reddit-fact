import React from 'react';
import { useSpring, animated } from 'react-spring';

import { ReactComponent as Bell } from '../../svg/bell.svg';

const ProTip = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 3000
  });
  return (
    <animated.div style={props}>
      <div className="max-w-sm mx-auto">
        <p className="text-center text-sm">
          <Bell style={{ display: 'inline-block', height: '15px' }} /> ProTip:
          You can drag the above card
        </p>
      </div>
    </animated.div>
  );
};

export default ProTip;
