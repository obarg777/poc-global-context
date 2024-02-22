"use client";
import { GlobalContext } from "@/context/global-context";
import { useContext } from "react";

export default function Home() {
  const { countContext, nameContext } = useContext(GlobalContext);
  const { count, setCount } = countContext;
  const { name, setName } = nameContext;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Dencrement</button>

      <h1>Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
