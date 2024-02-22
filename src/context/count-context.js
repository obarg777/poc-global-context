import { useState } from "react";

export const countContext = () => {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
};
