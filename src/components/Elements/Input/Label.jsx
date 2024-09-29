import React from "react";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <>
      <label htmlFor={htmlFor} className="font-dm-sans text-sm font-normal">
        {children}
        <span className="text-red-600 pl-2">*</span>
      </label>
    </>
  );
};

export default Label;
