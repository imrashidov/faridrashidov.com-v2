import React from "react";
import "ldrs/reuleaux";

const Loader = () => {
  return (
    <div className="loader">
      <l-reuleaux
        size="80"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="0.6"
        color="#7c3aed"
      ></l-reuleaux>
    </div>
  );
};

export default Loader;
