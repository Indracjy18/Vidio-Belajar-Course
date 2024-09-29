import Button from "../Elements/Button/Index";
import ListCart from "../Fragments/CardList";
import FormCard from "../Fragments/FormCard";
import { useDispatch, useSelector } from "react-redux";
import { setClick } from "../../redux/slices/cartSlice";

const FormCardLayouts = () => {
  const dispatch = useDispatch();
  const click = useSelector((state) => state.cart.click);

  const handleClickButton = () => {
    dispatch(setClick(!click));
  };

  return (
    <div className="w-full bg-transparent flex flex-col items-center md:p-10 p-0 gap-10">
      {/* Button untuk menambah kelas */}
      <Button
        onClick={handleClickButton}
        className="bg-primary-500 text-white shadow-lg py-4 px-7 hover:bg-opacity-90 hover:translate-y-1 transition duration-300 ease-in-out text-h5 font-poppins font-bold rounded-lg absolute md:right-40 right-10 top-32"
      >
        Tambah Kelas
      </Button>

      <div className="relative w-full overflow-hidden">
        <h1 className="animate-marquee whitespace-nowrap md:text-h1 text-h2 text-primary-500 font-poppins font-bold">
          PESANAN SAYA PESANAN SAYA PESANAN SAYA PESANAN SAYA
        </h1>
      </div>

      {click ? <FormCard /> : null}

      {/* Container List Cart */}
      <div className="w-full flex flex-col md:p-5 p-2 border rounded-2xl gap-5 bg-secondary-300 shadow-lg">
        <HeaderCart />
        <ListCart />
      </div>
    </div>
  );
};

// Header Cart
const HeaderCart = () => (
  <div className="flex gap-2 justify-center border rounded-lg bg-primary-500">
    {["CLASS", "TUTOR", "PRICE", "ACTION"].map((header, index) => (
      <div key={index} className="md:px-5 py-2 w-full text-center">
        <h4 className="md:text-base text-sm font-semibold font-poppins text-white">
          {header}
        </h4>
      </div>
    ))}
  </div>
);

export default FormCardLayouts;
