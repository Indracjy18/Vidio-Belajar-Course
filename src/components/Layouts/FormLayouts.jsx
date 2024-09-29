import React from "react";

const FormLayouts = (props) => {
  const { children, textH, textP } = props;
  return (
    <div className="bg-white flex-col border rounded gap-9 max-w-xl h-auto md:mx-auto md:my-40 sm:mx-5 sm:mt-16  ">
      <h3 className="font-poppins  font-semibold text-center pt-9 text-lg sm:text-xl lg:text-2xl">
        {textH}
      </h3>
      <p className="font-dm-sans text-center text-sm text-slate-400">{textP}</p>
      {children}
    </div>
  );
};

export default FormLayouts;
