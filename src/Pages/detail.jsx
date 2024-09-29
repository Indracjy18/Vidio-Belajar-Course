import Breadcrumbs from "../components/Fragments/Breadcrumbs";
import BannerLayouts from "../components/Layouts/BannerLayouts";
import DetailLayout from "../components/Layouts/DetailLayout";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";

const DetailProductPage = ({ page }) => {
  return (
    <>
      <HeaderLayouts
        position="fixed"
        type="product"
        color="text-dark-secondary"
        page={page}
      />
      <MainLayouts gap="gap-9">
        <Breadcrumbs />
        <BannerLayouts type="uiux" background="bg-hero-pattern" />
        <DetailLayout />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default DetailProductPage;
