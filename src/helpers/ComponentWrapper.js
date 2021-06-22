import "./ComponentWrapper.scss";
import React from "react";

const ComponentWrapper = ({ classNames = "wrapper", children }) => {
  return <div className={classNames}>{children}</div>;
};

export default ComponentWrapper;
