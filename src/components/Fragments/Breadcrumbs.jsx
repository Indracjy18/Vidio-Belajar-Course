import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="flex gap-6 ">
      <Link
        className="text-base text-black hover:text-red-500 font-dm-sans"
        to="/beranda"
      >
        Beranda
      </Link>
      <Link
        className="text-base text-black hover:text-red-500 font-dm-sans"
        to="/bisnis"
      >
        Bisnis
      </Link>
      <Link
        className="text-base text-black hover:text-red-500 font-dm-sans"
        to="/detail"
      >
        Beranda
      </Link>
    </div>
  );
};

export default Breadcrumbs;
