import React from "react";
import { reuleaux } from "ldrs";

reuleaux.register();

const Loader = () => {
  return (
    <div className="loader">
      <l-reuleaux
        size="80"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="0.8"
        color="#7c3aed"
      ></l-reuleaux>
    </div>
  );
};

export default Loader;
