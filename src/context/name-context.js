import { useState } from "react";

export const nameContext = () => {
  const [name, setName] = useState("default name");

  return {
    name,
    setName,
  };
};
