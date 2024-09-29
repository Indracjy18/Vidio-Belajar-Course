import React from "react";
import instagram from "../../../public/assets/img/icons/instagram.png";
import linkedin from "../../../public/assets/img/icons/linkedin.png";
import facebook from "../../../public/assets/img/icons/facebook.png";
import logo from "../../../public/assets/img/images/navlogo.png";

const FooterLayouts = () => {
  return (
    <footer className="border py-16 px-32 bg-white mt-8">
      <div className="flex justify-between ">
        <div className="px[120] ">
          <img src={logo} />
          <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
          <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p>+62-877-7123-1234</p>
        </div>
        <div className="gap-x-4">
          <p>Kategori</p>
          <p>Digital & Teknologi</p>
          <p>Pemasaran</p>
          <p>Manajemen Bisnis</p>
          <p>Pengembangan Diri</p>
          <p>Desain</p>
        </div>
        <div className="">
          <p>Perusahaan</p>
          <p>Tentang Kami</p>
          <p>FAQ</p>
          <p>Kebijakan Privasi</p>
          <p>Ketentuan Layanan</p>
          <p>Bantuan</p>
        </div>
        <div className="">
          <p>Komunitas</p>
          <p>Tips Sukses</p>
          <p>Blog</p>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="flex justify-between mt-3">
        <p className="font-dm-sans text-base text-slate-600">
          @2023 Gerobak Sayur All Rights Reserved.
        </p>
        <div className="flex justify-between">
          <img src={instagram} />
          <img src={linkedin} />
          <img src={facebook} />
        </div>
      </div>
    </footer>
  );
};

export default FooterLayouts;
