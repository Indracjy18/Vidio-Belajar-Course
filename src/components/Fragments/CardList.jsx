import { useFetchData } from "../hooks/FetchingData";
import Button from "../Elements/Button/Index";
import {
  setClick,
  setFormData,
  setIsUpdate,
  setItems,
  setToastMessage,
  setToastVisible,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../service/api";
import { useState } from "react";
import ErrorToast from "../Elements/Toast/Failed";
import SuccessToast from "../Elements/Toast/Success";

const ListCart = () => {
  const items = useFetchData();
  const toastMessage = useSelector((state) => state.cart.toastMessage);
  const toastVisible = useSelector((state) => state.cart.toastVisible);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const click = useSelector((state) => state.cart.click);

  const handleEdit = (id) => {
    const foundData = items.find((item) => item.id === id);
    dispatch(setFormData({ title: foundData.title, price: foundData.price }));
    dispatch(setIsUpdate({ id: id, status: true }));
  };

  const handleClickButton = (id) => {
    dispatch(setClick(!click));
    handleEdit(id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(`/product/${id}`);
      dispatch(setItems(items.filter((item) => item.id !== id)));
      dispatch(setToastMessage("Berhasil menghapus produk"));
      dispatch(setToastVisible(true));
    } catch (error) {
      console.error("Error deleting product:", error);
      dispatch(setToastMessage("Gagal menghapus produk"));
      dispatch(setToastVisible(true));
    }

    setTimeout(() => {
      dispatch(setToastVisible(false));
      dispatch(setToastMessage(""));
    }, 2000);
  };

  const handleDeleteSelected = async () => {
    try {
      await Promise.all(
        selectedItems.map(async (id) => {
          await deleteProduct(`/product/${id}`);
        })
      );

      dispatch(
        setItems(items.filter((item) => !selectedItems.includes(item.id)))
      );
      setSelectedItems([]);
      dispatch(setToastMessage("Berhasil menghapus produk yang dipilih"));
      dispatch(setToastVisible(true));

      setTimeout(() => {
        dispatch(setToastVisible(false));
        dispatch(setToastMessage(""));
      }, 2000);
    } catch (error) {
      console.error("Error deleting selected products:", error);
      dispatch(setToastMessage("Gagal menghapus produk yang dipilih"));
      dispatch(setToastVisible(true));

      setTimeout(() => {
        dispatch(setToastVisible(false));
        dispatch(setToastMessage(""));
      }, 2000);
    }
  };

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <>
      {toastVisible && toastMessage === "Berhasil menghapus produk" && (
        <SuccessToast message={toastMessage} />
      )}
      {toastVisible && toastMessage === "Gagal menghapus produk" && (
        <ErrorToast message={toastMessage} />
      )}
      {toastVisible &&
        toastMessage === "Berhasil menghapus produk yang dipilih" && (
          <SuccessToast message={toastMessage} />
        )}
      {toastVisible &&
        toastMessage === "Gagal menghapus produk yang dipilih" && (
          <ToastFailed message={toastMessage} />
        )}
      {items.map((item) => (
        <div
          key={item?.id}
          className="flex gap-4 justify-center items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <input
            type="checkbox"
            checked={selectedItems.includes(item?.id)}
            onChange={() => handleCheckboxChange(item?.id)}
            className="h-5 w-5 cursor-pointer text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500"
          />
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center">
            <h6 className="md:text-lg text-sm font-semibold text-gray-800">
              {item?.title}
            </h6>
          </div>
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center">
            <h6 className="md:text-lg text-sm font-semibold text-gray-600">
              VIPCODE
            </h6>
          </div>
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center">
            <h6 className="md:text-lg text-sm font-semibold text-gray-800">
              RP {item?.price}
            </h6>
          </div>
          <div className="flex md:flex-row flex-col w-full md:gap-5 gap-2 items-center justify-center">
            <Button
              onClick={() => handleClickButton(item.id)}
              className="flex hover:border-none hover:rounded-md h-full w-full justify-center items-center md:text-lg text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-300 ease-in-out rounded-lg px-4 py-2"
            >
              EDIT
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              className="flex hover:border-none hover:rounded-md h-full w-full justify-center items-center md:text-lg text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out rounded-lg px-4 py-2"
            >
              DELETE
            </Button>
          </div>
        </div>
      ))}
      {selectedItems.length > 0 && (
        <div className="flex justify-center items-center mt-5">
          <Button
            onClick={handleDeleteSelected}
            className="flex hover:border-none hover:rounded-md h-full px-5 py-2 justify-center items-center md:text-lg text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out rounded-lg"
          >
            Hapus yang Dipilih
          </Button>
        </div>
      )}

      {selectedItems.length > 0 && (
        <div className="flex justify-center items-center mt-5">
          <Button
            onClick={handleDeleteSelected}
            classNx1ame="flex hover:border border-none hover:rounded-md h-full px-5 py-2 justify-center items-center md:text-h4 text-body-small font-heading font-bold hover:bg-error hover:text-white text-error transition-all ease-in-out hover:translate-y1 duration-700"
          >
            Hapus yang Dipilih
          </Button>
        </div>
      )}
    </>
  );
};

export default ListCart;
