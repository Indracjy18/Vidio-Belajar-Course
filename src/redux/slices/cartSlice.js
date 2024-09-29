import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  formData: {
    title: "",
    price: "",
  },
  isUpdate: {
    id: null,
    status: false
  },
  toastMessage: null,
  toastVisible: false,
  click: false
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      // console.log("Items set:", state.items);
    },
    setFormData(state, action) {
      state.formData = action.payload;
      console.log("Form data updated:", state.formData);
    },
    setIsUpdate(state, action) {
      state.isUpdate = action.payload;
      console.log("Update status set:", state.isUpdate);
    },
    addItem(state, action) {
      // Pastikan state.items adalah array
      if (!Array.isArray(state.items)) {
        console.error("state.items is not an array, resetting to empty array.");
        state.items = [];
      }

      state.items.push(action.payload);

    },
    updateItem(state, action) {
      state.items = state.items.map(item => {
        if (item.id === state.isUpdate.id) {
          return {
            ...item,
            title: state.formData.title,
            price: state.formData.price
          };
        } else {
          return item;
        }
      });
    },
    deleteItem(state, action) {
      const id = action.payload;
      console.log("Deleting item with ID:", id);
      state.items = state.items.filter((item) => item.id !== id);
      console.log("Items after deletion:", state.items);
    },
    setToastMessage(state, action) {
      state.toastMessage = action.payload;
      console.log("Toast message set:", state.toastMessage);
    },
    setToastVisible(state, action) {
      state.toastVisible = action.payload;
      console.log("Toast visibility:", state.toastVisible);
    },
    setClick(state, action) {
      state.click = action.payload;
      console.log("Click status set:", state.click);
    },
  },
});

export const {
  setItems,
  setFormData,
  setIsUpdate,
  addItem,
  updateItem,
  deleteItem,
  setToastMessage,
  setToastVisible,
  setClick,
} = cartSlice.actions;

export default cartSlice.reducer;