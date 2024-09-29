
import FooterLayouts from "../components/Layouts/FooterLayouts";
import FormCardLayouts from "../components/Layouts/FormCardLayouts";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";

const CartPage = ({ page }) => {
  return (
    <>
      <HeaderLayouts
        position="fixed"
        type="product"
        color="text-dark-secondary"
        page={page}
      />
      <MainLayouts>
        <FormCardLayouts />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default CartPage;
