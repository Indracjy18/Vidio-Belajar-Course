import BannerLayouts from "../components/Layouts/BannerLayouts";
import CardProductsLayouts from "../components/Layouts/CardProductLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";

const ProductsPage = ({ page }) => {
  return (
    <>
      <HeaderLayouts
        position="fixed"
        type="product"
        color="text-black"
        page={page}
      />
      <MainLayouts gap="md:gap-16 gap-6">
        <BannerLayouts type="course" background="bg-hero-pattern" />
        <CardProductsLayouts />
        <BannerLayouts type="newsletter" background="bg-newsletter" />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default ProductsPage;
