import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This callback function will be executed after every render
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      // This cleanup function will be executed before the component is unmounted or re-rendered
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>Timer: {count}</h1>
    </div>
  );
}


export default UseEffect;
