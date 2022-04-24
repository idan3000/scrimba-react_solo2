import React from "react";
import data from "./data";

import Local from "./Local";

const Alllocals = () => (
  <React.Fragment>
    {data.map((info, key) => (
      <Local key={key} {...info} isLast={data.length === key - -1} />
    ))}
  </React.Fragment>
);

export default Alllocals;
