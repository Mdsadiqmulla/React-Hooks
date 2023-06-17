import React from 'react';
import ParamsChild from './ParamsChild';
const UseParams = () => {
  const message = 'Hello from ParentComponent!';

  return (
    <div>
      <ParamsChild message={message} />
    </div>
  );
};

export default UseParams;
