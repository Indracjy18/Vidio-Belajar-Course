import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = (props) => {
  const { type, placeholder, name, value, onChange } = props;

  return (
    <>
      <input
        type={type}
        className="py-2 border rounded-md w-full"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
