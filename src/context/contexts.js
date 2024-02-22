import { countContext } from "./count-context";
import { nameContext } from "./name-context";

export const mountContexts = () => {
  return {
    countContext: countContext(),
    nameContext: nameContext(),
  };
};
