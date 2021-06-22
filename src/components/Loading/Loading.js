import "./Loading.scss";
import React from "react";

const Loading = () => {
  return (
    <div className="loading-overlay" data-test="loading">
      <div className="loading">Loading...</div>
    </div>
  );
};

export default Loading;
