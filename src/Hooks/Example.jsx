import React, { useState, useEffect, useRef } from 'react';

const Example = () => {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Example;
