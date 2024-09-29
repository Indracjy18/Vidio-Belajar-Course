/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Layouts/NavbarLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import FormLayouts from "../components/Layouts/FormLayouts";

const LoginPage = () => {
  return (
    <>
      <Navbar page="auth" />
      <FormLayouts
        textH="Masuk Ke Akun"
        textP="Yuk,Lanjutin belajarmu di vidio belajar."
      >
        <FormLogin />
      </FormLayouts>
    </>
  );
};

export default LoginPage;
