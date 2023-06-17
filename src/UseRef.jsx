import React, { useRef } from 'react';

function UseRef() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return (
    <div>
      <h1>Count: {countRef.current}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseRef;