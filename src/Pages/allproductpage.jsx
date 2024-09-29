import React from "react";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";
import CardProductsLayouts from "../components/Layouts/CardProductLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";

const AllProductPage = () => {
  return (
    <>
      <HeaderLayouts type={product} page={page} />
      <MainLayouts>
        <CardProductsLayouts />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default AllProductPage;
