import React, { useState } from "react";
import InputFieldAuth from "../Elements/Input";
import Button from "../Elements/Button/Index";
import googleIcons from "../../../public/assets/img/icons/Google-icon.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email: ", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("Password: ", e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      action=""
      className=" lg:p-9 md:px-6 lg:pt-6 :pt-3 flex flex-col gap-4"
    >
      <InputFieldAuth
        label="Email"
        type="email"
        placeholder="masukan email anda"
        name="email"
        onChange={handleEmailChange}
        value={email}
      />
      <div className="relative">
        <InputFieldAuth
          label="Kata Sandi"
          type={showPassword ? "text" : "password"}
          placeholder="masukan kata sandi anda"
          name="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 relative top-3 text-gray-500" />
          ) : (
            <EyeIcon className="h-5 w-5 relative top-3  text-gray-500" />
          )}
        </div>
      </div>
      <span className="text-end font-dm-sans text-base font-medium">
        Lupa Password?
      </span>
      <Link to="/beranda">
        <Button className=" w-full border rounded-lg bg-primary-500 hover:cursor-pointer hover:text-primary-500">
          Masuk
        </Button>
      </Link>
      <Link to="/register">
        <Button className=" w-full border rounded-lg bg-primary-200 hover:cursor-pointer hover:text-primary-500">
          Daftar
        </Button>
      </Link>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-dm-sans text-normal leading-5">
          atau
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <Button
        className="w-full bg-primary-500 flex justify-center gap-2 text-body-medium font-bold text-[#4A505C] p-2 rounded-xl border"
        src="/public/assets/img/icons/Google-icon.png"
        submit="submit"
      >
        Masuk dengan Google
      </Button>
    </form>
  );
};

export default FormLogin;
