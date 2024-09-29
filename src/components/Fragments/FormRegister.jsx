import React, { useState } from "react";
import InputFieldAuth from "../Elements/Input";
import Button from "../Elements/Button/Index";
import googleIcons from "../../../public/assets/img/icons/Google-icon.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import InputNumber from "../Elements/Input/InputNumber";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action="" className="sm:px-6 sm:pt-3 flex flex-col gap-4">
      <InputFieldAuth
        label="Nama Lengkap"
        type="text"
        placeholder="Masuk nama lengkap anda.."
        name="nama"
        onChange={handleChange}
      />
      <InputFieldAuth
        label="Email"
        type="email"
        placeholder="masukan email anda.."
        name="email"
        onChange={handleChange}
        value={email}
      />

      <InputNumber label="No.HP" />

      <div className="relative">
        <InputFieldAuth
          label="Kata Sandi"
          type={showPassword ? "text" : "password"}
          placeholder="Masukan kata sandi anda.."
          name="password"
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
      <Button classname="bg-primary-500">Masuk</Button>
      <Button classname="bg-primary-200 hover:cursor-pointer hover:text-primary-500">
        <Link to="/register"></Link>Daftar
      </Button>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-dm-sans text-normal leading-5">
          atau
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <Button classname="text-black font-bold flex items-center justify-center">
        <img src={googleIcons} className="w-5 h-5 mr-2" alt="Google" />
        <span className="text-black">Masuk Dengan Google</span>
      </Button>
    </form>
  );
};

export default FormRegister;
