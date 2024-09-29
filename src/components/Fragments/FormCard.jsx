import { addNewProduct, updateProduct } from "../service/api.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  setFormData,
  setIsUpdate,
  updateItem,
  setToastMessage,
  setToastVisible,
  setClick,
} from "../../redux/slices/cartSlice";
import { uid } from "uid/single";
import { FaTimes } from "react-icons/fa";
import ErrorToast from "../Elements/Toast/Failed";
import SuccesToast from "../Elements/Toast/Success";
import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Index";

const FormCard = () => {
  const formData = useSelector((state) => state.cart.formData);
  const isUpdate = useSelector((state) => state.cart.isUpdate);
  const toastMessage = useSelector((state) => state.cart.toastMessage);
  const toastVisible = useSelector((state) => state.cart.toastVisible);
  const click = useSelector((state) => state.cart.click);
  const dispatch = useDispatch();

  const handleClickButton = () => {
    dispatch(setClick(!click));
    window.location.reload();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.title === "" || formData.price === "") {
      return false;
    }

    if (isUpdate.status) {
      try {
        await updateProduct(`/product/${isUpdate.id}`, formData);
        dispatch(updateItem({ id: isUpdate.id, newData: formData }));
        dispatch(setToastMessage("Berhasil mengubah produk"));
      } catch (error) {
        console.error("Error updating product:", error);
        dispatch(setToastMessage("Gagal mengubah produk"));
      }
    } else {
      const newData = { id: uid(), ...formData };
      dispatch(addItem(newData));
      try {
        await addNewProduct("/product", newData);
        dispatch(setToastMessage("Berhasil menambahkan produk"));
      } catch (error) {
        console.error("Error adding product:", error);
        dispatch(setToastMessage("Gagal menambahkan produk"));
      }
    }

    dispatch(setToastVisible(true));
    setTimeout(() => {
      dispatch(setToastVisible(false));
      dispatch(setToastMessage(""));
    }, 1000);

    dispatch(setIsUpdate({ id: null, status: false }));
    dispatch(setFormData({ title: "", price: "" }));
  };

  return (
    <div className="absolute flex flex-col items-center justify-center border w-screen min-h-screen top-0 bg-transparent backdrop-blur-sm">
      {toastVisible &&
        (toastMessage === "Berhasil mengubah produk" ||
        toastMessage === "Berhasil menambahkan produk" ? (
          <SuccesToast message={toastMessage} />
        ) : (
          <ErrorToast message={toastMessage} />
        ))}

      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 w-full bg-white md:p-12 p-6 rounded-3xl shadow-2xl flex flex-col gap-8 items-center border border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="flex items-center justify-between w-full">
          <h4 className="text-4xl text-gray-800 font-bold font-poppins flex-grow text-center">
            TAMBAH KELAS
          </h4>
          <Button
            onClick={handleClickButton}
            className="text-red-500 hover:text-red-700"
          >
            <FaTimes className="text-3xl" />
          </Button>
        </div>

        <div className="w-full border border-gray-300 rounded-xl flex flex-col items-center p-5 shadow-md bg-gray-50 transition duration-200 ease-in-out hover:bg-gray-100">
          <label
            htmlFor="title"
            className="text-xl text-gray-700 font-semibold font-poppins mb-2"
          >
            Nama Kelas
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={formData.title}
            placeholder="Masukkan Nama Kelas"
            className="w-full border-none outline-none bg-transparent text-2xl text-gray-800 text-center placeholder-gray-400 placeholder-opacity-70 focus:ring-2 focus:ring-blue-400 focus:bg-white transition duration-200 ease-in-out"
          />
        </div>

        <div className="w-full border border-gray-300 rounded-xl flex flex-col items-center p-5 shadow-md bg-gray-50 transition duration-200 ease-in-out hover:bg-gray-100">
          <label
            htmlFor="price"
            className="text-xl text-gray-700 font-semibold font-poppins mb-2"
          >
            Harga Kelas
          </label>
          <input
            type="text"
            pattern="[0-9]*[.]?[0-9]*"
            inputMode="decimal"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
            placeholder="Masukkan Harga Kelas"
            className="w-full border-none outline-none bg-transparent text-2xl text-gray-800 text-center placeholder-gray-400 placeholder-opacity-70 focus:ring-2 focus:ring-blue-400 focus:bg-white transition duration-200 ease-in-out"
          />
        </div>

        <Button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl shadow-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          Tambah Kelas
        </Button>
      </form>
    </div>
  );
};

export default FormCard;
