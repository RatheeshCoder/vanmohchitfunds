import React, { useState, useEffect } from "react";

function Prize() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const targetCount = 1500;
    const duration = 1000;
    const steps = 100;

    const increment = Math.ceil(targetCount / steps);
    const interval = duration / steps;

    const updateCount = () => {
      if (count + increment < targetCount) {
        setCount((prevCount) => prevCount + increment);
      } else {
        setCount(targetCount);
        clearInterval(timer);
      }
    };

    const timer = setInterval(updateCount, interval);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}+</h1>
    </div>
  );
}

export default Prize;
