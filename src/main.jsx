import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPages from "./Pages/errorPage";
import RegisterPage from "./Pages/register";
import "./index.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./Pages/login";
import AllProductPage from "./Pages/allproductpage";
import DetailProductPage from "./Pages/detail";
import ProductsPage from "./Pages/ProductPage";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CartPage from "./Pages/formCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage page="landingpage" />,
    errorElement: <ErrorPages />,
  },
  // {
  //   path: "/",
  //   element: <Navigate to="/login" />,
  //   errorElement: <ErrorPages />,
  // },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/kategori",
    element: <AllProductPage />,
  },
  {
    path: "/detail",
    element: <DetailProductPage />,
  },
  {
    path: "/keranjang",
    element: <CartPage />,
  },
  {
    path: "/beranda",
    element: <ProductsPage page="beranda" />,
    errorElement: <ErrorPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
