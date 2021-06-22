import "./Input.scss";
import React, { useState, useImperativeHandle, forwardRef } from "react";

const Input = ({ typeOfInput, name, placeholder, value, dataTest }, ref) => {
  const [localValue, setLocalValue] = useState("");

  const valueHandler = (event) => {
    const value = event.target.value;
    setLocalValue(value);
  };

  useImperativeHandle(
    ref,
    () => ({
      clearInputValue() {
        setLocalValue("");
      },
    }),
    []
  );

  return (
    <>
      <input
        type={typeOfInput}
        name={name}
        placeholder={placeholder}
        onChange={valueHandler}
        value={typeOfInput === "text" ? localValue : value}
        className="input-item"
        data-test={dataTest}
      />
    </>
  );
};

export default forwardRef(Input);
