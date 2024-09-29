/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../../public/assets/img/images/navlogo.png";
import Button from "../Elements/Button/Index";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { page } = props;
  return (
    <>
      <nav className="fixed w-screen bg-white py-3 px-4 sm:px-6 lg:px-28 shadow-md z-50 top-0 flex justify-between">
        <header className="py-3 pl-4 sm:pl-6 lg:py-4 lg:pl-6">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-36 h-auto object-scale-down"
            />
          </Link>
        </header>
        {page === "auth" ? " " : <Body page={page} />}
      </nav>
    </>
  );
};

const Body = ({ page }) => {
  if (page === "landingpage") {
    return (
      <ul className="flex items-center gap-2">
        <Link className="bg-primary-500 border rounded-lg">
          <li className="text-primary-500 font-dm-sans font-bold mr-10">
            Kategori
          </li>
        </Link>
        <Link to="/login">
          <Button className="bg-primary-500 w-28 border rounded-lg">
            Login
          </Button>
        </Link>
        <Link to="/register" className="bg-primary-500">
          <Button className=" border rounded-lg text-primary-500 w-28 font-bold">
            Register
          </Button>
        </Link>
      </ul>
    );
  } else if (page === "checkout") {
    return (
      <ul>
        <li>Kategori</li>
        <li>
          <Button></Button>
        </li>
        <li>
          <Button></Button>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>Kategori</li>
        <li></li>
      </ul>
    );
  }
};

export default Navbar;
