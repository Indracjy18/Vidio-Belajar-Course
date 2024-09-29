import React from "react";
import MainLayouts from "./MainLayouts";
import AsideCard from "../Fragments/AsideCard";

const AsideLayout = () => {
  return (
    <div>
      <MainLayouts>
        <AsideCard />
      </MainLayouts>
    </div>
  );
};

export default AsideLayout;
