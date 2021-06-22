import "./Form.scss";
import React from "react";

const Form = ({ children, formHandler }) => {
  return (
    <form
      onSubmit={formHandler}
      className="search-form"
      data-test="component-form"
    >
      {children}
    </form>
  );
};

export default Form;
