import React from "react";
import Label from "./Label";
import InputField from "./InputField";

const InputFieldAuth = (props) => {
  const { label, name, placeholder, type, value, onChange } = props;
  return (
    <>
      <div className="">
        <Label htmlFor={name}>{label}</Label>
        <InputField
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputFieldAuth;
