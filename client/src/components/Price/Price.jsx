import React from "react";

function Price({ val, classNames }) {
  return <h5 className={`fs-9 price ${classNames}`}>${val}</h5>;
}

export default Price;
