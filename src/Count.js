import React, { useState, useEffect } from "react";
import React from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return <h1>The component has been rendered for {count} seconds</h1>;
};

export default Count