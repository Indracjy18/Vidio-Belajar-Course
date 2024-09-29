import { useEffect } from "react";
import { getAllProduct } from "../service/api";
import { useDispatch, useSelector } from "react-redux";

import { setItems } from "../../redux/slices/cartSlice";

export const useFetchData = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllDataProduct = async () => {
      try {
        const result = await getAllProduct("/product");
        dispatch(setItems(result));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAllDataProduct();
  }, []);

  return items;
};
