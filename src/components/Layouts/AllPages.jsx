import React from "react";
import Navbar from "./NavbarLayouts";
import MainLayouts from "./MainLayouts";

import FooterLayouts from "./FooterLayouts";
import CardProductsLayout from "./CardProductLayouts";

const AllPages = () => {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <CardProductsLayout />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default AllPages;
